// fazer os imports
import { createContext, useState } from "react";

// criar o context
export const CatalogueContext = createContext([]);

// criar o provider
export const CatalogueProvider = ({ children }) => {
  const [catalogue, setCatalogue] = useState([
    {
      name: "Mouse Gamer Redragon Cobra, 10000DPI, Chroma, Preto - M711",
      price: 114.9,
      image:
        "https://images.kabum.com.br/produtos/fotos/94555/94555_1516707116_index_gg.jpg",
    },
    {
      name: "Console Microsoft Xbox Series S, 512GB, Branco - RRS-00006",
      price: 2399.9,
      image:
        "https://images.kabum.com.br/produtos/fotos/128561/console-microsoft-xbox-series-s-500gb-branco-rrs-00006_1601067301_gg.jpg",
    },
    {
      name: "Processador AMD Ryzen 5 5600X, Cache 35MB, 3.7GHz (4.6GHz Max Turbo), AM4, Sem Vídeo - 100-100000065BOX",
      price: 1789.9,
      image:
        "https://images.kabum.com.br/produtos/fotos/129451/processador-amd-ryzen-9-5950x-cache-72mb-3-4ghz-4-9ghz-max-turbo-am4-100-100000065box_1602603581_gg.jpg",
    },
    {
      name: "Smartphone Samsung Galaxy Note20 Ultra, 256GB, 108MP, Tela 6.9´, Mystic Black - SM-N986BZKSZTO",
      price: 499.0,
      image:
        "https://images.kabum.com.br/produtos/fotos/115961/smartphone-samsung-galaxy-note20-ultra-256gb-108mp-tela-6-9-mystic-black-sm-n986bznszto_1597064179_gg.jpg",
    },
    {
      name: "Kindle Paperwhite",
      price: 4899.0,
      image: "https://m.media-amazon.com/images/I/61ldUg+PqQL._AC_SL1000_.jpg",
    },
    {
      name: "Notebook Gamer Lenovo Gaming 3i Intel Core i5-10300H, GTX 1650 4GB, 8GB RAM, 256GB SSD, Linux, 15.6´ Widescreen, Chameleon Blue - 82CGS00100",
      price: 4999.0,
      image:
        "https://images.kabum.com.br/produtos/fotos/156929/notebook-gamer-lenovo-gaming-3i-intel-core-i5-10300h-gtx-1650-4gb-8gb-ram-256gb-ssd-linux-16-9-widescreen-chameleon-blue-82cgs00100_1624476897_gg.jpg",
    },
    {
      name: "Smart TV LG 55´ 4K OLED55C1, 120Hz, G-Sync, FreeSync, 4x HDMI 2.1, Inteligência Artificial, ThinQ, Google, Alexa - OLED55C1PSA",
      price: 5399.0,
      image:
        "https://images.kabum.com.br/produtos/fotos/158925/smart-tv-lg-55-4k-oled55c1-120hz-g-sync-freesync-4x-hdmi-2-1-inteligencia-artificial-thinq-google-alexa-oled55c1psa_1623683579_gg.jpg",
    },
    {
      name: "SSD Kingston A400, 480GB, SATA, Leitura 500MB/s, Gravação 450MB/s - SA400S37/480G",
      price: 349.9,
      image:
        "https://images.kabum.com.br/produtos/fotos/85198/85198_index_gg.jpg",
    },
    {
      name: "Cadeira Gamer Husky Gaming Tempest 500, Preto e Vermelho, Com Almofadas, Descanso Para Pernas Retrátil, Reclinável - HGMA079",
      price: 999.9,
      image:
        "https://images.kabum.com.br/produtos/fotos/134181/cadeira-gamer-tempest-husky-gaming-black-red-500_1618597487_gg.jpg",
    },
    {
      name: "Notebook Lenovo Ideapad S145 AMD Ryzen 5-3500U, Radeon RX Vega 8, 12GB RAM, 1TB HD, Linux, 15,6´ HD, Prata - 81V7S00000",
      price: 3519.9,
      image:
        "https://images.kabum.com.br/produtos/fotos/156933/notebook-lenovo-ideapad-s145-amd-ryzen-5-3500u-radeon-rx-vega-8-12gb-ram-1tb-hd-linux-15-6-hd-prata-81v7s00000_1623067443_gg.jpg",
    },
    {
      name: "Memória XPG Gammix D45, 8GB, 3200MHz, DDR4, CL16, Preta - AX4U32008G16A-CBKD45",
      price: 259.9,
      image:
        "https://images.kabum.com.br/produtos/fotos/166052/memoria-xpg-gammix-d45-8gb-3200mhz-ddr4-cl16-preta-ax4u32008g16a-cbkd45_1631135065_gg.jpg",
    },
    {
      name: "Kit Gamer Redragon - Teclado Mecânico Kumara, RGB, Switch Outemu Blue, PT, Branco + Mouse Cobra M711, Chroma, 10000DPI, Branco - S118W",
      price: 399.9,
      image:
        "https://images.kabum.com.br/produtos/fotos/128031/kit-gamer-redragon-teclado-mecanico-kumara-rgb-switch-outemu-blue-pt-branco-mouse-cobra-m711-chroma-10000dpi-branco-s118w_1600804255_gg.jpg",
    },
  ]);

  // criar a lógica para adicionar
  const addToCatalogue = (item) => {
    setCatalogue([...catalogue, item]);
  };

  // criar a lógica para remover
  const removeFromCatalogue = (item) => {
    const newCatalogue = catalogue.filter(
      (itemOnCatalogue) => itemOnCatalogue.name !== item.name
    );
    setCatalogue(newCatalogue);
  };

  return (
    <CatalogueContext.Provider
      value={{ catalogue, addToCatalogue, removeFromCatalogue }}
    >
      {children}
    </CatalogueContext.Provider>
  );
};
