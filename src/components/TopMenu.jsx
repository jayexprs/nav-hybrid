function TopMenu(props){
  const topItems = () => props.menu;
  const where = () => props.where;
  return (
    <div class="topmenu">
      <For each={topItems()}>{(item) =>
         <a href={item.replace(" ", "-")} class={where() == item ? "top-where" : ""}>{item}</a>
      }
        </For>
    </div>
  )
}

export default TopMenu