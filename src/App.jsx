import { useForm } from 'react-hook-form';
import Default from './templates/default';

const App = () => {
  const { register, watch } = useForm({
    defaultValues: {
      title: 'Lorem Ipsum Dolor',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae numquam inventore corrupti velit ipsam.',
      template: 'Default',
    },
  });

  const templateOptions = [
    {
      name: 'Default',
      component: Default,
    },
  ];
  const selectedTemplate = templateOptions.find(
    (option) => option.name === watch('template')
  )?.component;

  console.log('render');

  return (
    <div className="container mx-auto">
      <form className="grid grid-cols-2 gap-4">
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
          <div>
            <label htmlFor="template-select">Template:</label>
            <select
              id="template-select"
              className="form-control"
              {...register('template')}
            >
              <option disabled value="">
                Choose a template
              </option>
              {templateOptions.map(({ name }) => (
                <option value={name} key={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="col-span-1">
          <div className="aspect-[3/4] w-full bg-slate-50 p-3">
            {selectedTemplate &&
              selectedTemplate({
                title: watch('title'),
                content: watch('content'),
              })}
          </div>
        </div>
      </form>
    </div>
  );
};

export default App;
