function CheckStatus(
  {
      checked, 
      handler,
      checkId, 
      label, 
      name,
      size
  }
  : 
  {
      checked: boolean, 
      handler: Function, 
      label: string, 
      checkId: number,
      name: string,
      size?: number,
  }) {

return (
  <div className="flex gap-5 items-center my-5">
      <input 
          id={label}
          name={name}
          type="checkbox" 
          checked={checked} 
          onChange={()=>handler(checkId, !checked)} 
          className={`border border-gray-300 rounded-[50%] appearance-none cursor-pointer checked:bg-black checked:border-transparent`}
          style={{ width: `${size}px`, height: `${size}px` }} 
      />
      <label htmlFor={label}>{label}</label>
  </div>
)
}

export default CheckStatus