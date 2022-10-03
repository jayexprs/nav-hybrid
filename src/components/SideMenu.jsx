import {toggle, setToggle} from "./stores.jsx";

function ChildNav(props){
  const childNav = () => props.items;
  return (
    <For each={childNav()}>
      {(item) => <li class="list-child">{item}</li>}
    </For>
  )
}

function SideMenu(props) {
  const navItems = () => Object.entries(props.items);
  
  const clicker = (event) => {
    setToggle(toggle() + 1);
    let clicked = event.target;
    clicked.classList.toggle("clicked-list-header");
    let content = clicked.nextElementSibling;
    content.classList.toggle("none");
    console.log(toggle());
  };
  
  return (
    
      <For each={navItems()}>
        {(navItem) =>
          <div>
              <h3 class="list-header" onClick={clicker}> {navItem[0]}</h3>
              <ul class="list-items none"><ChildNav items={navItem[1]}></ChildNav></ul>
          </div>
        }
      </For>
      
  )
}
export default SideMenu