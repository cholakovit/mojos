

const GamePic = ({game, type}) => {
    let content = <>
        {
            {
                1: game.thumbnails[0] ? (
                    <img
                      src={game.thumbnails[0]?.imageUrl}
                      alt={game.name}
                      loading="lazy"
                    />
                  ) : game.thumbnails[1] ? (
                    <img
                      src={game.thumbnails[1]?.imageUrl}
                      alt={game.name}
                      loading="lazy"
                    />
                  ) : game.thumbnails[2] ? (
                    <img
                      src={game.thumbnails[2]?.imageUrl}
                      alt={game.name}
                      loading="lazy"
                    />
                  ) : (
                    ""
                  ),
                2:  <video width="260" height="170" autoPlay={true}>
                        <source src={game.thumbnails[0].videoUrl} type="video/mp4" />
                        <source src="movie.ogg" type="video/ogg" />
                        Your browser does not support the video tag.
                    </video>,
                3:  game.thumbnails[6] ? (
                    <img
                      src={game.thumbnails[6]?.imageUrl}
                      alt={game.name}
                      loading="lazy"
                    />
                  ) : game.thumbnails[3] ? (
                    <img
                      src={game.thumbnails[3]?.imageUrl}
                      alt={game.name}
                      loading="lazy"
                    />
                  ) : game.thumbnails[2] ? (
                    <img
                      src={game.thumbnails[2]?.imageUrl}
                      alt={game.name}
                      loading="lazy"
                    />
                  ) : ''
                  
            }[type]
        }
    </>


    return content
}

export default GamePic