import Upload from "assets/images/svg/upload.svg";
import {useDropzone} from "react-dropzone";
import {toast} from "react-toastify";

const UploadDocuments = () => {
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>{file.path}</li>
  ));

  const handleSubmit = (e) => {
    toast.success("The documents have been submitted");
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4 className="py-2 mt-4 text-xl font-semibold text-slate-900">
        File uploader
      </h4>
      <p className="text-slate-900">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <div className="mt-10">
        <label className="text-xs text-gray-400" htmlFor="documents">
          DOCUMENTS
        </label>
        <div {...getRootProps({className: "dropzone w-full"})}>
          <input id="documents" {...getInputProps()} />
          <div className="flex items-center justify-center h-40 bg-gray-100 border-2 border-dashed gap-x-3">
            <button
              type="button"
              className="flex items-center px-3 py-2 text-sm text-white bg-gray-500 rounded gap-x-2 hover:opacity-50"
            >
              <img src={Upload} alt="Upload" className="w-3 h-4" />
              SELECT FILE(S)
            </button>
            <p className="text-sm text-slate-900">or drop file(s) here</p>
          </div>
        </div>
        <aside className="mt-2">
          <ul>{files}</ul>
        </aside>
        <div className="mt-10 text-right">
          <button
            type="submit"
            className={`px-8 py-3 font-medium text-white rounded bg-dark-lime-green ${
              acceptedFiles?.length
                ? "hover:opacity-50"
                : "disabled:opacity-50 cursor-not-allowed"
            }`}
            disabled={!acceptedFiles?.length}
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default UploadDocuments;
