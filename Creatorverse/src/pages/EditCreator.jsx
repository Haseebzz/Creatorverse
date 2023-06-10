import { useEffect, useState } from 'react';
import { supabase } from '../client';
import { useParams, useNavigate } from 'react-router-dom';
import { FaTwitch, FaInstagram, FaTwitter, FaYoutube, } from "react-icons/fa";
const EditCreator = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [creator, setCreator] = useState(null);
  const [updatedCreator, setUpdatedCreator] = useState({
    name: '',
    twitchurl: '',
    youtubeurl: '',
    twitterurl: '',
    instagramurl: '',
    description: '',
    imageURL: ''
  });

  useEffect(() => {
    // Fetch the creator data from the database based on the id
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
        setUpdatedCreator(data);
      }
    };

    fetchCreator();
  }, [id]);
   const handleDelete = async () => {
    try {
      // Delete the creator from the database
      const { error } = await supabase
        .from('creators')
        .delete()
        .eq('id', id);

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

  const handleInputChange = (e) => {
    setUpdatedCreator({
      ...updatedCreator,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (
      !updatedCreator.name ||
      !updatedCreator.description ||
      !updatedCreator.imageURL
    ) {
      window.alert('Please fill in all required fields');
      return;
    }

    // Check if at least one URL is provided
    if (
      !updatedCreator.twitchurl &&
      !updatedCreator.youtubeurl &&
      !updatedCreator.twitterurl &&
      !updatedCreator.instagramurl
    ) {
      window.alert('Please provide at least one URL');
      return;
    }

    // Validate the URLs
    const urlRegex = /^(?:https?:\/\/)?(?:www\.)?[a-z0-9-]+(?:\.[a-z0-9-]+)+(?:\/[^\s]*)?$/i;

    if (updatedCreator.twitchurl && !urlRegex.test(updatedCreator.twitchurl)) {
      window.alert('Invalid Twitch URL');
      return;
    }

    if (updatedCreator.youtubeurl && !urlRegex.test(updatedCreator.youtubeurl)) {
      window.alert('Invalid YouTube URL');
      return;
    }

    if (updatedCreator.twitterurl && !urlRegex.test(updatedCreator.twitterurl)) {
      window.alert('Invalid Twitter URL');
      return;
    }

    if (updatedCreator.instagramurl && !urlRegex.test(updatedCreator.instagramurl)) {
      window.alert('Invalid Instagram URL');
      return;
    }

    try {
      // Update the creator's properties in the database
      const { error } = await supabase
        .from('creators')
        .update(updatedCreator)
        .eq('id', id);

      if (error) {
        window.alert('This url already belongs to a creator');
      } else {
        console.log('Creator updated successfully');
       
        navigate(`/`); // Navigate back to the home page
        window.location.reload();
        // Optionally, you can redirect to the view page after successful update
      }
    } catch (error) {
      console.error('Error updating creator:', error);
      window.alert('An error occurred while updating the creator.');
    }
  };

  if (!creator) {
    return <div>Loading...</div>;
  }

  return (
    <div className='py-16 max-w-[600px] mx-auto w-full'>
      <h1 className='text-4xl text-center font-bold'>Edit Creator</h1>
      <form onSubmit={handleSubmit} className='flex flex-col mt-3'>
        <label className='font-bold text-2xl'>
          Name
          </label>
          <input className='mt-3 w-full h-[70px] text-1xl rounded-md p-2 text-black '
            type="text"
            name="name"
            value={updatedCreator.name}
            onChange={handleInputChange}
          />
 
        <br />
        <label>
          <h1 className='font-bold text-2xl'>Image</h1>
          <p>Provide a link to an image of your creator. Be sure to include the http://</p>
          </label>
          <input
            type="text"
            name="imageURL"
            value={updatedCreator.imageURL}
            onChange={handleInputChange}
          />
     
        <br />
        <label>
          <h1 className='font-bold text-2xl'>Description</h1>
          <p>Provide a description of the creator. Who are they? What makes them interesting?</p>
       
          </label>
          <textarea
            name="description"
            value={updatedCreator.description}
            onChange={handleInputChange}
          />
        
        <br />

        <h1 className='text-3xl font-bold'>Social Media Links</h1>
        <p>Provide at least one of the social media links</p>
        <label className='flex  items-center mt-2'>
          <h1 className='mr-4 text-2xl'><FaTwitch/></h1>
          <h1 className='font-bold text-2xl'>Twitch url</h1>
          </label>
          <input
            type="text"
            name="twitchurl"
            value={updatedCreator.twitchurl}
            onChange={handleInputChange}
          />
       
        <br />
        <label className='flex  items-center mt-2'>
          <h1 className='mr-4 text-2xl'><FaYoutube/></h1>
          <h1 className='font-bold text-2xl'>Youtube url</h1>
          </label>
          <input
            type="text"
            name="youtubeurl"
            value={updatedCreator.youtubeurl}
            onChange={handleInputChange}
          />
      
        <br />
        <label className='flex items-center mt-2'>
          <h1 className='mr-4 text-2xl'><FaTwitter/></h1>
           <h1 className='font-bold text-2xl'>Twitter url</h1>
          </label>
          <input
            type="text"
            name="twitterurl"
            value={updatedCreator.twitterurl}
            onChange={handleInputChange}
          />
       
        <br />
        <label className='flex items-center mt-2'>
          <h1 className='mr-4 text-2xl'><FaInstagram/></h1>
          <h1 className='font-bold text-2xl'>Instagram url</h1>
          </label>
          <input
            type="text"
            name="instagramurl"
            value={updatedCreator.instagramurl}
            onChange={handleInputChange}
          />
      
        <br />
        
         <div className='flex items-center justify-center text-2xl text-white'>
        <button className='  bg-blue-600 w-[200px] rounded-md font-medium my-6 mr-8 py-4'
         type="submit">Submit</button>
          <button className='  bg-red-600 w-[200px] rounded-md font-medium my-6   py-4'
          onClick={handleDelete}
         >Delete</button>
              </div>
      </form>
    </div>
  );
};

export default EditCreator;
