import useAxios from '../../hooks/useAxios';

const Photos = () => {
  const { data: photos, isLoading } = useAxios('photos');

  if (isLoading) {
    return 'loading..';
  }

  return (
    <div>
      {photos.map(({ thumbnailUrl, id, title }) => (
        <span key={id}>
          <img src={thumbnailUrl} alt={title} />
        </span>
      ))}
    </div>
  )
}

export default Photos
