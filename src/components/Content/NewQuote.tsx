import { useState } from "react";
import { postContent } from "../../api/content";
import { ContentItem } from "../../interfaces/content";

export const NewQuote = () => {
  const [data, setData] = useState<ContentItem>({
    id:"",
    author: "",
    category: "star-wars",
    text: "",
  });

  const save = async () => {
    try {
      await postContent("quotes", data);
      setData({
        id:"",
        author: "",
        category: "",
        text: ""
      });
    } catch (error) {
      console.error("Error saving quote:", error);
    }
  };

  return (
    <div>
      <h1>Submit new quote</h1>
      <form>
        <div>
          <label>Category</label>
          <select
            name="category"
            onChange={(e) =>
              setData((prev) => ({ ...prev, category: e.target.value }))
            }
          >
            <option value="star-wars">Star Wars</option>
            <option value="famous-people">Famous People</option>
            <option value="saying">Saying</option>
            <option value="humour">Humour</option>
            <option value="motivational">Motivational</option>
          </select>
        </div>

        <div>
          <label>Author</label>
          <input
            value={data.author}
            onChange={(e) =>
              setData((prev) => ({ ...prev, author: e.target.value }))
            }
          />
        </div>

        <div>
          <label>Quote Text</label>
          <input
            value={data.text}
            onChange={(e) =>
              setData((prev) => ({ ...prev, text: e.target.value }))
            }
          />
        </div>
      </form>
      <button onClick={save}>Save</button>
    </div>
  );
};
