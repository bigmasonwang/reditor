import { useForm } from 'react-hook-form';

const App = () => {
  const { register, watch } = useForm({
    defaultValues: {
      title: '',
      content: '',
    },
  });

  console.log(watch());

  return (
    <div className="container mx-auto">
      <form className="grid grid-cols-3 gap-4">
        <div className="col-span-1">
          <div>
            <label htmlFor="title">Title:</label>
            <input
              className="form-control"
              id="title"
              type="text"
              name="title"
              {...register('title')}
            />
          </div>
          <div>
            <label htmlFor="content">Content:</label>
            <textarea
              className="form-control"
              cols="40"
              rows={5}
              {...register('content')}
            />
          </div>
        </div>
        <div className="col-span-2">asdf</div>
      </form>
    </div>
  );
};

export default App;
