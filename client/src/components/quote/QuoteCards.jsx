import { privateRequest } from "../../utils/axios";
import CreateQuote from "./CreateQuote";
import QuoteCard from "./QuoteCard";
import { useEffect, useState } from "react";

const QuoteCards = () => {
  const [quote, setQuote] = useState([]);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await privateRequest.get('/quote');
      const quotes = res.data.quotes;
      const randomQuotes = shuffle(quotes);
      setQuote(randomQuotes);
           setLoading(false)

    } catch (error) {
      console.error(error);
            setLoading(true);

    }
  };

 const shuffle = (arr) => {
  for (let totalShuffleArea = arr.length - 1; totalShuffleArea > 0; totalShuffleArea--) {
    const indexToBeExchanged = Math.floor(Math.random() * (totalShuffleArea + 1));
    const temp = arr[totalShuffleArea];
    arr[totalShuffleArea] = arr[indexToBeExchanged];
    arr[indexToBeExchanged] = temp;
  }
  return arr;
};


  const getNextQuote = () => {
    if (quote.length > 0) {
      const nextIndex = (currentQuoteIndex + 1) % quote.length;
      setCurrentQuoteIndex(nextIndex);
    }
  };

  return (
    <>
      <CreateQuote fetchData={fetchData} />
    {loading ? (
        <p>Loading quotes...</p>
      ) : (
        <div className="grid grid-cols-1">
          {quote.length > 0 && (
            <QuoteCard key={quote[currentQuoteIndex]._id} item={quote[currentQuoteIndex]} fetchData={fetchData} />
          )}
        </div>
      )}
      <button  onClick={getNextQuote} className="btn btn-primary m-12">
        Next Quote
      </button>
    </>
  );
};

export default QuoteCards;
