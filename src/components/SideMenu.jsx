function ChildNav(props){
  const childNav = () => props.items;
  return (
    <For each={childNav()}>
      {(item) => <li class="list-child"><a href={item == 'button' ? '/components/button' : ''}>{item}</a></li>}
    </For>
  )
}

function ExpandableItem(props) {
  const group = () => props.group;
  const elements = () => props.elements;

  const clicker = (event) => {
    let clicked = event.target;
    clicked.classList.toggle("clicked-list-header");
    let content = clicked.nextElementSibling;
    content.classList.toggle("none");
  };

  return (
   
    <div>
        <h3 class="list-header" onClick={clicker}> {group()}</h3>
        <ul class="list-items none"><ChildNav items={elements()}></ChildNav></ul>
    </div>
    
  
  )
}

function SideMenu(props) {
  const navItems = () => Object.entries(props.items);
  
  return (
      <For each={navItems()}>
        {(navItem) => 
          navItem[1].length > 0 ? <ExpandableItem group={navItem[0]} elements={navItem[1]}></ExpandableItem> : <h3 class="side-item">{navItem[0]}</h3>
        }
      </For>
  )
}
export default SideMenu