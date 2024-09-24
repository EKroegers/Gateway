import { Props } from './Icon.types';
const Icon = ({ caption, connectionID, imgSrc }: Props) => {
  return (
    <button
      data-testid="gateway-icon"
      id={`Gateway-Icon-Container ID_${connectionID ?? '0'}`}
      onClick={() => {
        document
          ?.getElementById(`Gateway-Frame-Container ID_${connectionID ?? '0'}`)
          ?.classList.toggle('Minimized');
      }}
    >
      <img src={imgSrc} />
      <p>{caption}</p>
    </button>
  );
};

export default Icon;
