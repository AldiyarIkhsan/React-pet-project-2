import { useEffect, useState } from "react";
import { getContent } from "../../api/content";
import { useLocation, useNavigate} from "react-router-dom";
import { ContentItem } from "../../interfaces/content";
import { deleteContent } from "../../api/content";

export const Content = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [quotes, setQuotes] = useState<ContentItem[]>([]);

  const fetchQuotes = async () => {
    try {
      const category = location.pathname.split("/");
      if (category.length > 2) {
        const response = await getContent(
          `quotes.json?orderBy="category"&equalTo="${category[2]}"`
        );
        if (response) {
          const quotesData: ContentItem[] = Object.entries(response).map(
            (e) => {
              return {
                id: e[0],
                author: e[1].author,
                category: e[1].category,
                text: e[1].text,
              };
            }
          );
          setQuotes(quotesData);
        } else {
          setQuotes([]);
        }
      } else {
        const response = await getContent(`quotes.json`);
        if (response) {
          if (response) {
            const quotesData: ContentItem[] = Object.entries(response).map(
              (e) => {
                return {
                  id: e[0],
                  author: e[1].author,
                  category: e[1].category,
                  text: e[1].text,
                };
              }
            );
            setQuotes(quotesData);
          } else {
            setQuotes([]);
          }
        } else {
          setQuotes([]);
        }
      }
    } catch (error) {
      console.error("Error fetching quotes:", error);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, [location.pathname]);

  console.log(quotes);
  return (
    <div>
      <h2>Quotes</h2>
      <ul>
        {quotes.map((quote, index) => (
          <li key={index} style={{ border: "2px solid black", margin: 20 }}>
            <p>"{quote.text}"</p>
            <p>- {quote.author}</p>
            <button onClick={()=>deleteContent(quote.id).then(fetchQuotes)}>X</button>
            <button onClick={()=>navigate(`/edit/${quote.id}`)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
