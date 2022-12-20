import { useState, useEffect } from "react";

const About = () => {
  const [state, setstate] = useState({
    title: "",
    body: "",
  });
  const [data, setdata] = useState([]);
  const handleDelete = (id) => {
    const list = data.splice(id, 1);

    setdata([...data], list);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    data.push(state);
    setdata(data);
    setstate({
      ...state,
      title: "",
      body: "",
    });
  };
  const handleEdit=(id)=>{
      const item=data[id]
     
          setstate({
              title:item?.title,
              body:item?.body
          })
    
  }
  useEffect(() => {
    const item = data ? data : [];
    if (item) {
      setdata(item);
    }
  }, [data]);
  return (
    <div>
      <form>
        <input
          type="text"
          value={state.title}
          onChange={(e) => setstate({ ...state, title: e.target.value })}
        />{" "}
        <br />
        <input
          type="text"
          value={state.body}
          onChange={(e) => setstate({ ...state, body: e.target.value })}
        />
        <br />
        <button onClick={(e) => handleSubmit(e)}>Submit</button>
      </form>
      <center>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>title</th>
              <th>body</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, id) => {
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{item.title}</td>
                  <td>{item.body}</td>
                  <td>
                    <button onClick={() => handleDelete(id)}>delete</button>
                   
                  </td>
                  <td> <button onClick={() => handleEdit(id)}>Edit</button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </center>
    </div>
  );
};
export default About;
