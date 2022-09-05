import { useState } from "react";
import {Col, Form, Button}  from 'reactstrap';
import ReactDOM from 'react-dom/client';
import Filter from 'bad-words';

const Discussion = ({
    date = new Date(),
  initialText = "",
  time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds(),

  
}) => {
    const [comments, setComments] = useState([]);
    const [names, setNames] = useState([]);
    const [titles, setTitles] = useState([]);
    const [all, setAll] = useState([]);
  const [commentText, setCommentText] = useState(initialText);
  const [nameText, setNameText] = useState(initialText);
  const [titleText, setTitleText] = useState(initialText);
  var Filter = require('bad-words'),
    filter = new Filter();
  
  const isTextareaDisabled = commentText.length === 0;
  const isNameTextareaDisabled = nameText.length === 0;
  const isTitleTextareaDisabled = titleText.length === 0;

  const onSubmit = (event) => {
    event.preventDefault();
    alert(commentText + " " + nameText + " " + titleText + " " + date.toLocaleTimeString());
    setComments([...comments, { id: comments.length, name: commentText }]);
    setNames([...names, { id: names.length, name: nameText }]);
    setTitles([...titles, { id: titles.length, name: titleText }]);
    setAll([...all, { id: titles.length, name: nameText, title: titleText, comment: commentText, time: date.toLocaleTimeString() }]);
    setCommentText("");
    setNameText("");
    setTitleText("");
  
  };



  return (
    <><><><><><Col align="center">
          <Form onSubmit={onSubmit}>
              <textarea
                  className="name-form-textarea"
                  value={nameText}
                  onChange={(e) => setNameText(e.target.value)} /><div>
                  <textarea
                      className="comment-form-textarea"
                      value={titleText}
                      onChange={(e) => setTitleText(e.target.value)} />
              </div>
              <div>
                  <textarea
                      className="comment-form-textarea"
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)} />
              </div>
              <Button variant="primary" size="lg" disabled={isTextareaDisabled || isNameTextareaDisabled || isTitleTextareaDisabled}>

                  Create Topic

              </Button>
          </Form>

      </Col></>
              </>
              </><p>{all.map(all => (
                  <><h1 key={all.id}>{filter.clean(all.title)}</h1><h2 key={all.id}>{filter.clean(all.name)}</h2><p key={all.id}>{filter.clean(all.comment)}</p>
                  <p1> Created at: {all.time} <Button variant="outline-primary">Update</Button>{' '}  <Button onSubmit={(all.id)} variant="outline-primary">Delete</Button>{' '}</p1></>))} </p></>
                  </>

  );
  
};

export default Discussion;