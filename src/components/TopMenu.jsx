function MenuItem(props){
  const item = () => props.item;
  return <a>{item()}</a>
}

function TopMenu(props){
  const topMenu = ['Getting started', 'Components', 'Styles', 'Layouts', 'Patterns', 'Use cases']
  return (
    <div class="topmenu">
      <For each={topMenu}>{(item) =>
        <MenuItem item={item}></MenuItem>
      }
        </For>
    </div>
  )
}

export default TopMenu