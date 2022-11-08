function ChildNav(props){
  const childNav = () => props.items;
  const where = () => props.where;
  return (
    <For each={childNav()}>
      {(item) => <li class="list-child"><a href={`${where()}/${item}`}>{item}</a></li>}
    </For>
  )
}

function ExpandableItem(props) {
  const group = () => props.group;
  const elements = () => props.elements;
  const where = () => props.where;

  const clicker = (event) => {
    let clicked = event.target;
    clicked.classList.toggle("clicked-list-header");
    let content = clicked.nextElementSibling;
    content.classList.toggle("none");
  };

  return (
   
    <div>
      <h3 class="list-header" onClick={clicker}> {group()}</h3>
      <ul class="list-items none"><ChildNav where={where()} items={elements()}></ChildNav></ul>
    </div>
    
  
  )
}

function SideMenu(props) {
  const navItems = () => Object.entries(props.items);
  const where = () => props.where;
  
  return (
      <For each={navItems()}>
        {(navItem) => 
          navItem[1].length > 0 ? <ExpandableItem where={where()} group={navItem[0]} elements={navItem[1]}></ExpandableItem> : <h3 class="side-item">{navItem[0]}</h3>
        }
      </For>
  )
}
export default SideMenu