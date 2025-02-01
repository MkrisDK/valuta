import CurrencyConverter from '@/components/CurrencyConverter';

export default function DkkToUsd() {
  return (
    <main className="min-h-screen p-4 md:p-8">
      <h1 className="text-2xl font-bold text-center mb-8">
        Omregn Danske Kroner (DKK) til Amerikanske Dollar (USD)
      </h1>
      <CurrencyConverter defaultFrom="DKK" defaultTo="USD" isFixed={true} />
      
      <div className="mt-8 max-w-2xl mx-auto prose">
        <h2>Om DKK til USD valutaomregning</h2>
        <p>
          Denne side giver dig mulighed for at omregne danske kroner (DKK) til 
          amerikanske dollars (USD) med real-time valutakurser. Vores valutakurser 
          opdateres regelmæssigt for at sikre præcise omregninger.
        </p>
      </div>
    </main>
  );
}
