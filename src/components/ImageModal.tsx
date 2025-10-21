type ImageModalProps = {
  image: string;
  onClose: () => void;
};

const ImageModal: React.FC<ImageModalProps> = ({ image, onClose }) => {
  return (
    <div className="relative">
      <img
        src={image}
        alt="Nyom nagyban"
        className="rounded-2xl shadow-2xl border-4 border-tint w-full object-contain"
      />
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-tint border-tint bg-paper text-xl flex justify-center items-center p-6 rounded-full border-2 w-8 h-8 shadow-2xl transition-all hover:bg-tint hover:text-paper hover:border-paper focus:!border-2 focus:!border-paper focus:!border-solid"
      >
        ✖
      </button>
    </div>
  );
};

export default ImageModal;
