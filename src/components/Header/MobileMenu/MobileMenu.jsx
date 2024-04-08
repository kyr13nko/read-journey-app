import sprite from "../../../assets/images/sprite.svg";

const MobileMenu = () => {
  return (
    <div>
      <svg>
        <use href={`${sprite}#burger`} />
      </svg>

      <svg>
        <use href={`${sprite}#close`} />
      </svg>
    </div>
  );
};

export default MobileMenu;
