function MenuItem(props){
  const item = () => props.item;
  
  return <a href={item().replace(" ", "-")}>{item()}</a>
}

function TopMenu(props){
  const topMenu = () => props.menu;
  const where = () => props.where;
  return (
    <div class="topmenu">
      <For each={topMenu()}>{(item) =>
         <a href={item.replace(" ", "-")} class={where() == item ? "top-where" : ""}>{item}</a>
      }
        </For>
    </div>
  )
}

export default TopMenu