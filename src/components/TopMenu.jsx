function TopMenu(props){
  const topItems = () => props.menu;
  const where = () => {return props.where.replace("/", "")};
  return (
    <div class="topmenu">
      <For each={topItems()}>{(item) =>
         <a href={`/${item.replace(" ", "-")}`} class={where() == item ? "top-where" : ""}>{item}</a>
      }
        </For>
    </div>
  )
}

export default TopMenu