function ChildNav(props){
  const childNav = () => props.items;
  return (
    <For each={childNav()}>
      {(item) => <li class="list-child">{item}</li>}
    </For>
  )
}

function SideNav(props) {
  const navItems = () => Object.entries(props.items);
  return (
      <div>
      <For each={navItems()}>
        {(item) => <ul class="nav-items"><li class="list-header">{item[0]} <ChildNav items={item[1]}></ChildNav></li></ul>}
      </For>
      </div>
  )
}
export default SideNav