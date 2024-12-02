interface ViewProps {
  statType: string;
  image: string;
  newStat: string;
  tendance?: string;
  tenddown?: string;
}

function View({ statType,image,newStat,tendance,tenddown} : ViewProps) {
    return (
        <div>
            <h3>{statType}</h3>
            <img src={image} />
            <p className="new">{newStat}</p>
            {tenddown ? (
        <p className="tenddown-overview">{tenddown}</p>
    ) : (
        tendance && <p className="tendance-overview">{tendance}</p>
    )}
        </div>
    );
}

export default View;