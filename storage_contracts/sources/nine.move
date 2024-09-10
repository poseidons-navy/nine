//A smart contract for storing CIDs onchain
module nine::nine {
    use std::string;
    use std::vector;
    use std::signer;
    use aptos_framework::event::emit;
    use aptos_framework::timestamp;

    use aptos_framework::account::SignerCapability;
    use aptos_framework::account;
    use aptos_framework::aptos_coin::AptosCoin;
    use aptos_framework::coin;
    #[test_only]
    use aptos_framework::event::emitted_events;
    #[test_only]
    use aptos_std::debug;

    const SEED: vector<u8> = b"nine";
    //error codes
    const ECID_EXISTS: u64 = 11;
    const ECID_FAILED_TO_STORE: u64 = 12;

    struct State has key {
        signer_capability: SignerCapability,
        cid_hid: u64
    }

    struct CidStored has key, store {
        cid: string::String,
    }

    struct CidArray has key, store {
        cids: vector<CidStored>,
    }

    #[event]
    struct CidStoredEvent has drop, store {
        cid: string::String,
        timestamp: u64,
        hid: u64,
    }

    struct Payment has store, drop {
        request_id: string::String,
        amount: u64,
        sender: address,
        receiver: address,
    }

    #[event]
    struct PaymentEvent has drop, store {
        request_id: string::String,
        amount: u64,
        sender: address,
        receiver: address,
        timestamp: u64,
    }

    #[event]
    struct PaymentEvent2 has drop, store {
        cid: string::String,
        amount: u64,
        payer_address: address,
        payee_address: address,
        timestamp: u64,
        hid: u64
    }

    fun init_module(account: &signer) {
        let (resource_signer, signer_capability) =
            account::create_resource_account(account, SEED);
        move_to(&resource_signer, State { signer_capability, cid_hid: 100 });
        let cid_array = CidArray { cids: vector::empty() };
        move_to(&resource_signer, cid_array);

    }

    public entry fun store_cid(admin: &signer, cid: string::String) acquires CidArray, State {
        let resource_address = account::create_resource_address(&@nine, SEED);
        let cid_array = borrow_global_mut<CidArray>(resource_address);
        let state = borrow_global_mut<State>(resource_address);
        let current_hid = state.cid_hid;

        state.cid_hid = state.cid_hid + 1;
        vector::push_back(&mut cid_array.cids, CidStored { cid: cid });
        emit(
            {
                CidStoredEvent {
                    cid,
                    timestamp: timestamp::now_microseconds(),
                    hid: current_hid
                }
            },
        )
    }

    public entry fun store_payment_details(
        admin: &signer,
        sender: address,
        receiver: address,
        amount: u64,
        request_id: string::String
    ) {
        emit(

            PaymentEvent {
                request_id,
                amount,
                sender,
                receiver,
                timestamp: timestamp::now_microseconds(),
            },
        );
    }

    public entry fun store_payment_details2(
        admin: &signer,
        sender: address,
        receiver: address,
        amount: u64,
        request_id: string::String
    ) {
        emit(
            PaymentEvent2 {
                cid: request_id,
                amount,
                payer_address: sender,
                payee_address: receiver,
                timestamp: timestamp::now_microseconds(),
                hid: 1
            },
        );
    }

    public entry fun make_payment(
        amount: u64, receiver: address, sender: &signer, request_id: string::String
    ) {
        let sender_address = signer::address_of(sender);
        //Transfer Apt
        coin::transfer<AptosCoin>(sender, receiver, amount);
        emit(
             PaymentEvent {
                request_id,
                amount,
                sender: sender_address,
                receiver,
                timestamp: timestamp::now_microseconds(),
            },
        );
    }

    #[test]
    fun test_store_cid() acquires CidArray, State {
        let admin = account::create_account_for_test(@nine);
        let aptos = account::create_account_for_test(@0x1);

        timestamp::set_time_has_started_for_testing(&aptos);

        init_module(&admin);
        store_cid(&admin, string::utf8(b"Some string"));
        store_cid(&admin, string::utf8(b"Some string"));
        let cids = emitted_events<CidStoredEvent>();

        debug::print<vector<CidStoredEvent>>(&cids);
    }

    #[test]
    fun test_make_payment() {
        let admin = account::create_account_for_test(@nine);
        let sender = account::create_account_for_test(@0x3333);
        let receiver = account::create_account_for_test(@0x444);
        let aptos = account::create_account_for_test(@0x01);
        timestamp::set_time_has_started_for_testing(&aptos);
        let (burn_cap, freeze_cap, mint_cap) =
            coin::initialize<AptosCoin>(
                &aptos,
                string::utf8(b"Aptos"),
                string::utf8(b"APT"),
                8,
                false,
            );
        coin::register<AptosCoin>(&aptos);
        coin::register<AptosCoin>(&sender);
        coin::register<AptosCoin>(&receiver);
        let coins = coin::mint<AptosCoin>(2000, &mint_cap);
        coin::deposit<AptosCoin>(signer::address_of(&aptos), coins);
        coin::transfer<AptosCoin>(&aptos, signer::address_of(&receiver), 1000);
        coin::transfer<AptosCoin>(&aptos, signer::address_of(&sender), 1000);
        // coin::deposit(signer::address_of(&user2), coins);
        coin::destroy_mint_cap(mint_cap);
        coin::destroy_freeze_cap(freeze_cap);
        init_module(&admin);
        make_payment(
            100,
            signer::address_of(&receiver),
            &sender,
            string::utf8(b"Funny user id"),
        );
        let funds_transferred = emitted_events<PaymentEvent>();
        debug::print<vector<PaymentEvent>>(&funds_transferred);
        coin::destroy_burn_cap(burn_cap);
    }

    #[test]
    fun test_store_payment_details() {
        let admin = account::create_account_for_test(@nine);
        let sender = account::create_account_for_test(@0x3333);
        let receiver = account::create_account_for_test(@0x444);
        let aptos = account::create_account_for_test(@0x01);
        timestamp::set_time_has_started_for_testing(&aptos);
        init_module(&admin);
        store_payment_details(
            &admin,
            signer::address_of(&receiver),
            signer::address_of(&receiver),
            90,
            string::utf8(b"The cid"),
        );
        let cids = emitted_events<PaymentEvent>();

        debug::print<vector<PaymentEvent>>(&cids);

    }
}
