import './App.css';
import './normal.css'
function App() {
  return (
    <div className="App">
      <aside className='sidemenu'>
        <div className='sidemenubutton'>
          <span>+</span>
          New chat
        </div>
      </aside>
      <section className='chatbox'>
        <div className='chat-log'>
          <div className='chat-message chatbot'>
            <div className='chat-message-center'>
              <div className='avatar'></div>
              <div className='message'>
                Given Querry
              </div>
            </div> 
          </div>
          <div className='chat-message-chatbot'>
            <div className='chat-message-center'>
              <div className='avatar-chatbot'></div>
              <div className='message'>
                Contetnt to be displayed here 
              </div>
            </div> 
          </div>
        </div>
        <div className='chat-input-holder'>
          <textarea rows="1" className='chat-input-textarea'>

          </textarea>
        </div>
      </section>
    </div>
  );
}

export default App;
