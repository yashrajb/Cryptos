# Cryptos
Cryptos is cli app which gives information about cryptocurrency 


Cryptos is cli app which gives information abour cryptocurrency like dash,bitcoin,ethereum.
here i used public api https://coinmarketcap.com

Here are some helpful commands 

coin : here you have type name of cryptocurrency like bitcoin,dash,litecoin.Default value is bitcoin 
       alias : c
     
changeInto: here you have to type in which currency you want to convert.Default value is INR
            alias: ch
            
Examples - 

$ node app.js --coin="litecoin" --ch="eur"

here you can see i am changing into EUR 

Result is -

Name: Litecoin
Symbol: LTC
Price usd: 165.551
Price btc: 0.019025
Percent change 1h: -0.46
Percent change 24h: -4.61
Percent_change_7d: 1.83
last_updated: 1521725641
Price in EUR: 134.396785065



