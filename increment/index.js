let app = document.getElementById("app");
const state = { count: 0 };
//clear DOM
const clearDOM = () => {
  document.body.removeChild(app);

  //create new
  const newApp = document.createElement("div");
  newApp.id = "app";
  app = newApp;
  document.body.appendChild(app);
};
const render = ()=>{
clearDOM();

const countHeader=document.createElement('h1');
countHeader.innerHTML=state.count;

const incrementButton = document.createElement('button');
incrementButton.innerHTML="Increment ME!";
incrementButton.onclick=increment;

app.append(countHeader,incrementButton)

}

function increment(){
    ++state.count;
    render();

}
render();