//A smart contract for payments
module payment::payment{
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

    const SEED: vector<u8> = b"nine-payments";

    //error codes
    const ERROR_INVALID_AMOUNT: u64 = 11;
    const ERROR_INSUFFICIENT_BALANCE: u64 = 12;
    

    struct Payment has store, drop{
        request_id: string::String,
        amount: u64,
        sender: address,
        receiver: address,       
    }
    
  struct State has key {
        signer_capability: account::SignerCapability,
    }
    #[event]
    struct PaymentEvent has drop, store{
        request_id: string::String,
        amount: u64,
        sender: address,
        receiver: address,
        timestamp: u64,
    }
    fun init_module(admin: &signer)

    {
        let (resource_signer, signer_capability) = account::create_resource_account(admin, SEED);
move_to(&resource_signer, State{
    signer_capability
})
    }
    public entry fun make_payment(amount: u64, receiver:address,  sender: &signer, request_id: string::String)
    {
         let sender_address = signer::address_of(sender);
         //Transfer Apt
        coin::transfer<AptosCoin>(sender, receiver, amount);
        emit(PaymentEvent{
            request_id,
            amount,
            sender: sender_address,
            receiver,
            timestamp: timestamp::now_microseconds(),
        }); 
    }

    #[test]
    fun test_make_payment()
    {
                let admin = account::create_account_for_test(@payment);
                let sender = account::create_account_for_test(@0x3333);
                let receiver = account::create_account_for_test(@0x444);
                let aptos = account::create_account_for_test(@0x01);
                timestamp::set_time_has_started_for_testing(&aptos);
                let (burn_cap, freeze_cap,mint_cap) = coin::initialize<AptosCoin>(&aptos,string::utf8(b"Aptos"), string::utf8(b"APT"), 8, false);
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
        make_payment(100, signer::address_of(&receiver), &sender, string::utf8(b"Funny user id"));
        let funds_transferred = emitted_events<PaymentEvent>();
        debug::print<vector<PaymentEvent>>(&funds_transferred);
        coin::destroy_burn_cap(burn_cap);
    }

}