import { Button, Label, Spinner, TextInput } from "flowbite-react";
import { useRef, useState } from "react";
import useAddProject from "../../hooks/useAddProject";

const AddProject = () => {
  const cardImgRef = useRef();
  const featureImgRef = useRef();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    link: "",
    technologies: [],
    features: [],
    cardImg: null,
    featureImg: null,
    featureDescription: "",
  });
  const [featureEntered, setFeatureEntered] = useState("");
  const [technologyEntered, setTechnologyEntered] = useState("");
  const { loading, addProject, success } = useAddProject();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleImgChange = (e, state) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        state === "cardImg" &&
          setFormData({
            ...formData,
            cardImg: reader.result,
          });
        state === "featureImg" &&
          setFormData({
            ...formData,
            featureImg: reader.result,
          });
      };
      reader.readAsDataURL(file);
    }
  };

  const addToFeatures = () => {
    if (featureEntered) {
      setFormData({
        ...formData,
        features: [...formData.features, featureEntered],
      });
    }

    return setFeatureEntered("");
  };

  const addToTechnologies = () => {
    if (technologyEntered) {
      setFormData({
        ...formData,
        technologies: [...formData.technologies, technologyEntered],
      });
    }

    return setTechnologyEntered("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addProject(formData);

    if (success) {
      setFormData({
        title: "",
        description: "",
        link: "",
        technologies: [],
        features: [],
        cardImg: null,
        featureImg: null,
        featureDescription: "",
      });
    }
  };

  return (
    <div className="w-full flex flex-col items-center max-w-4xl mx-auto">
      <h1 className="font-bold my-10 text-xl md:text-3xl">Add Project</h1>
      <form onSubmit={handleSubmit} className="w-[40%] flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="title" value="Title" className="text-white" />
          </div>
          <TextInput
            id="title"
            type="text"
            placeholder="Enter title..."
            required
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="description"
              value="Description"
              className="text-white"
            />
          </div>
          <TextInput
            id="description"
            type="text"
            placeholder="Enter description..."
            required
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="link" value="Link" className="text-white" />
          </div>
          <TextInput
            id="link"
            type="text"
            placeholder="Enter link..."
            required
            value={formData.link}
            onChange={handleChange}
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="technologies"
              value="Technologies"
              className="text-white"
            />
          </div>
          <TextInput
            id="technologies"
            type="text"
            placeholder="Enter a technology..."
            value={technologyEntered}
            onChange={(e) => setTechnologyEntered(e.target.value)}
          />
          <div className="flex flex-wrap items-center gap-4">
            <Button
              onClick={addToTechnologies}
              outline
              gradientDuoTone="purpleToBlue"
              className="mt-5 w-32"
            >
              Add a technology
            </Button>
            {formData?.technologies.length > 0 &&
              formData.technologies.map((technology, index) => (
                <span key={`${index}${technology}`}>{`${
                  index + 1
                }. ${technology}`}</span>
              ))}
          </div>
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="features" value="Features" className="text-white" />
          </div>
          <TextInput
            id="features"
            type="text"
            placeholder="Enter a feature..."
            value={featureEntered}
            onChange={(e) => setFeatureEntered(e.target.value)}
          />
          <div className="flex flex-wrap items-center gap-4">
            <Button
              onClick={addToFeatures}
              outline
              gradientDuoTone="purpleToBlue"
              className="mt-5 w-32"
            >
              Add Feature
            </Button>
            {formData?.features.length > 0 &&
              formData.features.map((feature, index) => (
                <span key={`${index}${feature}`}>{`${
                  index + 1
                }. ${feature}`}</span>
              ))}
          </div>
        </div>

        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="featureDescription"
              value="Feature Description"
              className="text-white"
            />
          </div>
          <TextInput
            id="featureDescription"
            type="text"
            placeholder="Enter features description..."
            required
            value={formData.featureDescription}
            onChange={handleChange}
          />
        </div>

        <div className="flex gap-3">
          <input
            ref={cardImgRef}
            accept="image/*"
            type="file"
            className="hidden"
            onChange={(e) => handleImgChange(e, "cardImg")}
          />
          <input
            ref={featureImgRef}
            accept="image/*"
            type="file"
            className="hidden"
            onChange={(e) => handleImgChange(e, "featureImg")}
          />
          <Button
            type="button"
            onClick={() => cardImgRef.current.click()}
            gradientDuoTone="purpleToPink"
          >
            Card Image
          </Button>
          <Button
            type="button"
            onClick={() => featureImgRef.current.click()}
            gradientDuoTone="purpleToPink"
          >
            Feature Image
          </Button>
        </div>
        {/* Display the selected Image */}
        <div className="flex flex-wrap gap-5">
          {formData.cardImg && (
            <div>
              <span className="text-teal-500">Card Image</span>
              <img src={formData?.cardImg} className="w-32 h-24" />
            </div>
          )}
          {formData.featureImg && (
            <div>
              <span className="text-teal-500">Feature Image</span>
              <img src={formData?.featureImg} className="w-32 h-24" />
            </div>
          )}
        </div>

        <Button
          disabled={loading}
          type="submit"
          className="mt-5 disabled:opacity-80 mb-16"
        >
          {loading ? <Spinner aria-label="Default status example" /> : "Submit"}
        </Button>
      </form>
    </div>
  );
};

export default AddProject;
