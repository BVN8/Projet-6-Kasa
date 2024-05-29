function Tags(props) {
    const {tagName} = props;
  
      return (
        <div className="tag">
          <div className="tag__name">{tagName}</div>
        </div>
      )
    }
    
  export default Tags;