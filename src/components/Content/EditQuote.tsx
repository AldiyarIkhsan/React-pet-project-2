import { useEffect, useState } from "react";
import { ContentItem } from "../../interfaces/content";
import { getContentById, putContent } from "../../api/content";
import { useLocation, useNavigate } from "react-router-dom";

export const EditQuote = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [editdata, setEditdata] = useState<ContentItem>({
    id: "",
    author: "",
    category: "star-wars",
    text: "",
  });
  const id = location.pathname.split("/")[2];

  const fetchQuote = async () => {
    getContentById(id).then((e) => setEditdata(e));
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const save = async () => {
    try {
      await putContent(id, editdata);
    } catch (error) {
      console.error("Error saving quote:", error);
    }
    navigate(-1)
  };

  return (
    <div>
      <h1>Edit quote</h1>
      <form>
        <div>
          <label>Category</label>
          <select
            name="category"
            onChange={(e) =>
              setEditdata((prev) => ({ ...prev, category: e.target.value }))
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
            value={editdata.author}
            onChange={(e) =>
              setEditdata((prev) => ({ ...prev, author: e.target.value }))
            }
          />
        </div>

        <div>
          <label>Quote Text</label>
          <input
            value={editdata.text}
            onChange={(e) =>
              setEditdata((prev) => ({ ...prev, text: e.target.value }))
            }
          />
        </div>
      </form>
      <button onClick={save}>Save</button>
    </div>
  );
};

export default EditQuote;
