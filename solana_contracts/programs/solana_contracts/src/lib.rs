use anchor_lang::prelude::*;

declare_id!("FDNdjkFkgTXZDBY76wxG5b3wMZrVeoykJg8TShzY8pJ6");

#[program]
pub mod nine_requests {
    use super::*;
 
}

#[account]
pub struct Request {
    pub cid: String,
    pub payee: String,
    pub payer: String
}

#[derive(Accounts)]
pub struct CreateRequest<'info> {
    #[account(init, payer = user, space = 8 + 8)]
    pub request: Account<'info, Request>,
    #[account(mut)]
    pub payee: Account<'info>,
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}