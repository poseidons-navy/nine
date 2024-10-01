use anchor_lang::prelude::*;

declare_id!("FDNdjkFkgTXZDBY76wxG5b3wMZrVeoykJg8TShzY8pJ6");

#[program]
pub mod solana_contracts {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
