import React, { useState } from 'react';
import Modal from 'react-modal';
import { FaExclamationCircle } from 'react-icons/fa';

interface ConfigurationCardProps {
  email: string;
}

const ConfigurationCard: React.FC<ConfigurationCardProps> = ({ email }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div className="bg-white rounded-lg shadow-md p-8 max-w-[681px] w-full max-md:max-w-full">
      <div className="flex relative flex-col flex-wrap gap-6 px-10 py-6 min-h-[201px] max-md:px-5">
        <div className="flex items-start gap-4">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7abb76920f6c03a7e2fb4ef128ecfb6b4bc0a99b6c07b6d83417406c4dc3d2c3?placeholderIfAbsent=true&apiKey=fcfba4c18f40412a85837ebda335ccd2"
            alt="Configuration icon"
            className="object-contain shrink-0 mt-1.5 aspect-[0.96] w-[75px]"
          />
          <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
            <div className="flex flex-col px-1 w-full font-semibold max-md:max-w-full">
              <div className="grid grid-cols-[1fr_auto] gap-2 text-base leading-6 text-neutral-600">
                <div className="flex-auto w-[433px] max-md:max-w-full">
                  ¿Quieres usar <strong>{email}</strong> para configurar Google Workspace?
                </div>
                <FaExclamationCircle
                  onClick={openModal}
                  className="cursor-pointer text-blue-500"
                  style={{
                    blockSize: "var(--gm3-icon-button-standard-touch-target-size, 24px)",
                    inlineSize: "var(--gm3-icon-button-standard-touch-target-size, 24px)",
                    alignSelf: "center",
                  }}
                />
              </div>
              <div
                className="self-start mt-4 text-sm leading-5 text-neutral-800"
                style={{
                  fontFamily: "Google Sans Text",
                  fontSize: ".875rem",
                  fontWeight: 400,
                  letterSpacing: 0,
                  lineHeight: "1.25rem",
                  margin: "4px 0 0",
                }}
              >
                Usarás este correo electrónico para acceder a Gmail, Documentos,
                <br /> Drive, Calendario y otros servicios
              </div>
            </div>
            <div className="flex gap-5 justify-between mt-4 max-w-full w-[445px]">
              <button className="flex flex-col justify-center p-1.5 text-sm font-semibold bg-black bg-opacity-0 transform transition-transform duration-300 hover:scale-105 active:scale-95">
                <div className="flex flex-col px-12 py-1.5 bg-white rounded-2xl border border-solid border-zinc-500 max-md:px-5">
                  <div className="text-[rgb(29_78_216/var(--tw-bg-opacity))]">Si, usar este correo</div>
                  <div className="self-center mt-1 text-[rgb(29_78_216/var(--tw-bg-opacity))]">electrónico</div>
                </div>
              </button>
              <button className="my-auto text-sm leading-4 text-center text-[rgb(29_78_216/var(--tw-bg-opacity))] transform transition-transform duration-300 hover:scale-105 active:scale-95">
                No, configurar con un
                <br />
                dominio
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Configurar Google Workspace"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2 style={{
          fontFamily: "Google Sans",
          fontSize: "1.375rem",
          fontWeight: 400,
          letterSpacing: 0,
          lineHeight: "1.75rem",
          margin: 0
        }}>
          Configurar Google Workspace
        </h2>
        <p style={{
          fontFamily: "Google Sans Text",
          fontSize: ".875rem",
          fontWeight: 400,
          letterSpacing: 0,
          lineHeight: "1.25rem",
          margin: "24px 0 0"
        }}>
          Si te registras con <strong>{email}</strong>, seguirás usando tus apps de correo electrónico y calendario actuales. De manera opcional, puedes optar por usar Gmail y Calendario de Google con esta dirección de correo electrónico. Para hacerlo, deberás verificar la propiedad de dete.cl más adelante.
        </p>
        <p style={{
          fontFamily: "Google Sans Text",
          fontSize: ".875rem",
          fontWeight: 400,
          letterSpacing: 0,
          lineHeight: "1.25rem",
          margin: "24px 0 0"
        }}>
          Si prefieres crear una nueva dirección de correo electrónico personalizada, como tú@tu-empresa.com, te recomendamos configurar Google Workspace con un dominio. Si no eres propietario de un dominio, te ayudaremos a encontrar uno.
        </p>
        <button onClick={closeModal} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          Cerrar
        </button>
      </Modal>
    </div>
  );
};

export default ConfigurationCard;
