import { useEffect, useState } from 'react';
import { supabase } from '../client';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaTwitch, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const ViewCreator = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [creator, setCreator] = useState(null);

  useEffect(() => {
    // Fetch the creator data from your database based on the name
    const fetchCreator = async () => {
      const { data, error } = await supabase
        .from('creators')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error fetching creator:', error);
      } else {
        setCreator(data);
      }
    };

    fetchCreator();
  }, [id]);

  const handleDelete = async () => {
    try {
      // Delete the creator from the database
      const { error } = await supabase.from('creators').delete().eq('id', id);

      if (error) {
        console.error('Error deleting creator:', error);
      } else {
        console.log('Creator deleted successfully');
        navigate('/'); // Navigate back to the home page
        window.location.reload();
      }
    } catch (error) {
      console.error('Error deleting creator:', error);
    }
  };

  if (!creator) {
    return <div>Loading...</div>;
  }

  return (
    <div className=''>
      <div className='max-w-[800px] mx-auto py-16 text-white grid md:grid-cols-2 gap-8'>
        <div className='h-[500px]'>
          <img className='h-[390px]' src={creator.imageURL} alt='Creator' />
        </div>
        <div className='p-2'>
          <h1 className='text-4xl text-blue-800 font-bold text-center max-h-[80px] overflow-hidden'>{creator.name}</h1>
          <div className='flex items-center justify-between mt-4'>
          {creator.youtubeurl && (
            <a href={creator.youtubeurl} target='_blank' rel='noopener noreferrer'>
              <FaYoutube className='mr-2 text-4xl' />
         
            </a>
          )}
          {creator.twitchurl && (
            <a href={creator.twitchurl} target='_blank' rel='noopener noreferrer'>
              <FaTwitch className='mr-2 text-4xl' />
              
            </a>
          )}
          {creator.twitterurl && (
            <a href={creator.twitterurl} target='_blank' rel='noopener noreferrer'>
              <FaTwitter className='mr-2 text-4xl' />
            
            </a>
          )}
          {creator.instagramurl && (
            <a href={creator.instagramurl} target='_blank' rel='noopener noreferrer'>
              <FaInstagram className='mr-2 text-4xl' />
            
            </a>
          )}
              </div>
          <p className='mt-5 text-xl font-bold max-h-[200px] overflow-hidden'>{creator.description}</p>
        </div>
      </div>
      <div className="flex items-center justify-center py-16">
  <Link to={`/edit/${id}`}>
    <button className= "bg-blue-500 w-[300px] rounded-md   mr-8 py-2  text-3xl hover:bg-blue-950">
      EDIT
    </button>
  </Link>
  <button
    onClick={handleDelete}
    className="bg-red-500  w-[300px] rounded-md   mr-8 py-2  text-3xl hover:bg-red-900"
  >
    Delete
  </button>
</div>

    </div>
  );
};

export default ViewCreator;
