import { useState, useEffect, useRef } from 'react';

function Realisations() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const realisationsRef = useRef(null);

  const realisationsData = [
    {
      date: "Mars 2021",
      title: "Zébra divers... en peinture (extérieur) ou résine (intérieur)",
      images_horizontal: [
      ],
      images_vertical: [
        {
          src: "IMG_20210313_153131.jpg",
        },
        {
          src: "IMG_20210313_151850.jpg",
        },
      ],
      layout_horizontal: "",
      layout_vertical: "row",
      vertical_position: "bottom"
    },
    {
      date: "Février 2021",
      title: "Places PMR diverses...",
      images_horizontal: [

      ],
      images_vertical: [
        {
          src: "IMG_20210226_181514.jpg",
        },
        {
          src: "IMG_20210310_112541.jpg",
        },
      ],
      layout_horizontal: "row",
      layout_vertical: "row",
      vertical_position: "right"
    },
    {
      date: "Février 2021",
      title: "Lidl Vienne : création de logos XXL",
      images_horizontal: [
        
      ],
      images_vertical: [
        {
          src: "IMG_20210216_143052.jpg",
          showBeforeAfter: true,
          beforeAfterLabel: "Avant"
        },
        {
          src: "IMG_20210217_145730.jpg",
          showBeforeAfter: true,
          beforeAfterLabel: "Après"
        },
        {
          src: "IMG_20210216_143057.jpg",
          showBeforeAfter: true,
          beforeAfterLabel: "Avant"
        },
        {
          src: "IMG_20210217_145803.jpg",
          showBeforeAfter: true,
          beforeAfterLabel: "Après"
        }
      ],
      layout_horizontal: "row",
      layout_vertical: "col",
      vertical_position: ""
    },
    {
      date: "Septembre 2020",
      title: "Les Avenières (38) : retraçage intégral du parking et création du parcours PMR (passage piéton rouge + bandes de guidage)",
      images_horizontal: [
        {
          src: "IMG_20200909_125712_0165_JPG.jpg",
          showBeforeAfter: false
        },
        
        {
          src: "IMG_20200909_125550_0162_JPG.jpg",
          showBeforeAfter: false
        },
        {
          src: "IMG_20200625_121222_0134_JPG.jpg",
          showBeforeAfter: false
        },
      ],
      images_vertical: [
        {
          src: "IMG_20201019_120337.jpg",
          showBeforeAfter: false
        },
      ],
      layout_horizontal: "col",
      layout_vertical: "col",
      vertical_position: ""
    },
    {
      date: "Mai 2020",
      title: "Civrieux d'Azergues : zébra d'une fosse de visite jaune et noir – grenaillage et pose d'une peinture époxy",
      images_horizontal: [
        
      ],
      images_vertical: [
        {
          src: "IMG_20200602_160739.jpg",
          showBeforeAfter: false
        },
      ],
      layout_horizontal: "row",
      layout_vertical: "col",
      vertical_position: ""
    },
    {
      date: "Mars 2020",
      title: "Lidl Vénissieux : marquage anti-stationnement",
      images_horizontal: [
        
        {
          src: "IMG_20200405_164845_0089_JPG.jpg",
          showBeforeAfter: false
        },
        
      ],
      images_vertical: [],
      layout_horizontal: "col",
      layout_vertical: "row",
      vertical_position: "right"
    },
    {
      date: "Mars 2020",
      title: "Lidl La Verpilière (38) : retraçage du parking",
      images_horizontal: [
        {
          src: "IMG_20200424_120529.jpg",
          showBeforeAfter: false
        },
        {
          src: "IMG_20200424_120536.jpg",
          showBeforeAfter: false
        },
      ],
      images_vertical: [
        {
          src: "IMG_20200423_203539.jpg",
          showBeforeAfter: false
        },
        {
          src: "IMG_20200423_203614.jpg",
          showBeforeAfter: false
        }
      ],
      layout_horizontal: "col",
      layout_vertical: "col",
      vertical_position: ""
    },
    {
      date: "Février 2020",
      title: "EM Lyon : pose de borne anti-stationnement",
      images_horizontal: [
        {
          src: "IMG_20200313_152051_1.jpg",
          showBeforeAfter: false
        },
      ],
      images_vertical: [],
      layout_horizontal: "col",
      layout_vertical: "row",
      vertical_position: "right"
    },
    {
      date: "Janvier 2020",
      title: "Angoulême : zébra intérieur jaune et noir",
      images_horizontal: [
        
        {
          src: "IMG_20200203_150408.jpg",
          showBeforeAfter: false
        },
      ],
      images_vertical: [],
      layout_horizontal: "col",
      layout_vertical: "row",
      vertical_position: "right"
    },
    {
      date: "Novembre 2019",
      title: "Lyon : marquage – Richardson Villeurbanne",
      images_horizontal: [
        {
          src: "IMG_20191120_151214.jpg",
          showBeforeAfter: false
        },
        {
          src: "IMG_20191120_144238.jpg",
          showBeforeAfter: false
        }
      ],
      images_vertical: [],
      layout_horizontal: "row",
      layout_vertical: "row",
      vertical_position: "right"
    },
    {
      date: "Novembre 2019",
      title: "Richardson Saint Etienne",
      images_horizontal: [
        {
          src: "IMG_20190921_165402.jpg",
          showBeforeAfter: false
        },
        {
          src: "IMG_20190921_165418.jpg",
          showBeforeAfter: false
        },
      ],
      images_vertical: [],
      layout_horizontal: "row",
      layout_vertical: "row",
      vertical_position: "right"
    },
    {
      date: "Octobre 2019",
      title: "Lyon (Ecully) & Bordeaux (Bègles) : création de places publicitaires",
      images_horizontal: [
       
        {
          src: "IMG_20191014_105736.jpg",
          showBeforeAfter: false
        },
        {
          src: "IMG_20191130_190946.jpg",
          showBeforeAfter: false
        },
      ],
      images_vertical: [
        {
          src: "IMG_20191130_190946.jpg",
          showBeforeAfter: false
        },
        {
          src: "IMG_20190927_180844.jpg",
          showBeforeAfter: false
        }
      ],
      layout_horizontal: "row",
      layout_vertical: "row",
      vertical_position: "right"
    },
    {
      date: "Avril 2019",
      title: "Rhône Alpes : mise aux normes PMR de Lidl – exemple de résine gravillonnée",
      images_horizontal: [
        {
          src: "IMG_20190328_134311.jpg",
          showBeforeAfter: false
        }
      ],
      images_vertical: [
        {
          src: "IMG_20190415_154753.jpg",
          showBeforeAfter: false
        },
        {
          src: "IMG_20190415_154733.jpg",
          showBeforeAfter: false
        }
      ],
      layout_horizontal: "col",
      layout_vertical: "col",
      vertical_position: ""
    },
    {
      date: "Janvier 2019",
      title: "Nîmes : création d'un marquage éphémère pour un anniversaire (20+10)",
      images_horizontal: [
        {
          src: "sabena_technics.jpg",
          showBeforeAfter: false
        }
      ],
      images_vertical: [],
      layout_horizontal: "col",
      layout_vertical: "row",
      vertical_position: "right"
    },
    {
      date: "Juillet 2018",
      title: "Clermont-Ferrand : before & after",
      images_horizontal: [
        
      ],
      images_vertical: [
        {
          src: "c10d27_dcc6f02912364eb792754ddfcf2c900b~mv2_d_1840_3264_s_2.jpg",
          showBeforeAfter: true,
          beforeAfterLabel: "Avant"
        },
        {
          src: "c10d27_04e340318a744e7a987c8702a7e19b49~mv2_d_1840_3264_s_2.jpg",
          showBeforeAfter: true,
          beforeAfterLabel: "Après"
        },
        {
          src: "c10d27_078c04da621a4764bc97b060203459ef~mv2_d_1840_3264_s_2.jpg",
          showBeforeAfter: true,
          beforeAfterLabel: "Avant"
        },
        {
          src: "c10d27_04e646e71662460188c7fcf4afe3c314~mv2_d_1840_3264_s_2.jpg",
          showBeforeAfter: true,
          beforeAfterLabel: "Après"
        }
      ],
      layout_horizontal: "row",
      layout_vertical: "col",
      vertical_position: ""
    },
    {
      date: "Juin 2018",
      title: "Auxerre : La Halle aux Chaussures",
      images_horizontal: [
        {
          src: "c10d27_1a0abb2ffb2a48a98b30018eb9b512be~mv2_d_3264_1840_s_2.jpg",
          showBeforeAfter: false
        },
        {
          src: "c10d27_1468b9573b994d658ca95073928f42a0~mv2_d_3264_1840_s_2.jpg",
          showBeforeAfter: false
        }
      ],
      images_vertical: [
        {
          src: "c10d27_1d7193f344ff4568b3209472f3da3d4d~mv2_d_3264_1840_s_2.jpg",
          showBeforeAfter: false
        }
      ],
      layout_horizontal: "row",
      layout_vertical: "row",
      vertical_position: "right"
    },
    {
      date: "Mai 2018",
      title: "Isle d'Abeau : Pharmacie du Golf",
      images_horizontal: [
        {
          src: "c10d27_2680260dde314ccc89dbb13afbce1825~mv2_d_3264_1840_s_2.jpg",
          showBeforeAfter: false
        },
        {
          src: "c10d27_d261b3245d8541b19f0e5b4480b5673c~mv2_d_3264_1840_s_2.jpg",
          showBeforeAfter: false
        },
        {
          src: "c10d27_3a46b3c04c78467c83de06e768cbe195~mv2_d_3264_1840_s_2.jpg",
          showBeforeAfter: false
        }
      ],
      images_vertical: [
        
      ],
      layout_horizontal: "row",
      layout_vertical: "row",
      vertical_position: "right"
    },
    {
      date: "Mai 2018",
      title: "Ecully : EM Lyon – création de 2 places de parking",
      images_horizontal: [
        {
          src: "c10d27_ef7124e3e55340618e3c805c1f0d48a7~mv2_d_3264_1840_s_2.jpg",
          showBeforeAfter: false
        }
      ],
      images_vertical: [
        {
          src: "c10d27_160306c6073146a2901616c5d189d399~mv2_d_1840_3264_s_2.jpg",
          showBeforeAfter: false
        }
      ],
      layout_horizontal: "row",
      layout_vertical: "row",
      vertical_position: "right"
    },
    {
      date: "Avril 2018",
      title: "Aux Echets (01) : traçage de zébra sur les portes sectionnelles - Décibel France",
      images_horizontal: [
        {
          src: "c10d27_0130afc1c62f4feab121b7c838b5ebe6~mv2_d_3264_1840_s_2.jpg",
          showBeforeAfter: true,
          beforeAfterLabel: "Avant"
        },
        {
          src: "c10d27_f313457a8826413ca30b01c270e5995d~mv2_d_3264_1840_s_2.jpg",
          showBeforeAfter: true,
          beforeAfterLabel: "Après"
        }
      ],
      images_vertical: [],
      layout_horizontal: "row",
      layout_vertical: "row",
      vertical_position: "right"
    },
    {
      date: "Avril 2018",
      title: "Civrieux d'Azergues : traçage du parking de l'étude notariale + création de place handicapée",
      images_horizontal: [
        {
          src: "c10d27_cd454fb8b0ed44c9ac9bb73580934520~mv2_d_3264_1840_s_2.jpg",
          showBeforeAfter: true,
          beforeAfterLabel: "Avant"
        },
        {
          src: "c10d27_84e211f3a2fd4b3986b12dce918f1357~mv2_d_3264_1840_s_2.jpg",
          showBeforeAfter: true,
          beforeAfterLabel: "Après"
        }
      ],
      images_vertical: [],
      layout_horizontal: "row",
      layout_vertical: "row",
      vertical_position: "right"
    },
    {
      date: "Avril 2018",
      title: "Méximieux (01) : retraçage des flèches de circulation (10 flèches)",
      images_horizontal: [
        {
          src: "c10d27_d47fc8c9e44b482690df75df40010786~mv2_d_3264_1840_s_2.jpg",
          showBeforeAfter: true,
          beforeAfterLabel: "Avant"
        },
        {
          src: "c10d27_077a6b964406484cb9d246b40b2254ec~mv2_d_3264_1840_s_2.jpg",
          showBeforeAfter: true,
          beforeAfterLabel: "Après"
        }
      ],
      images_vertical: [],
      layout_horizontal: "row",
      layout_vertical: "row",
      vertical_position: "right"
    },
    {
      date: "Mars 2018",
      title: "Ecully (69) : création du marquage pour Irrijardin",
      images_horizontal: [
        {
          src: "c10d27_5afdb92f9d434c0796c51c7b4b812880~mv2_d_3264_1840_s_2.jpg",
          showBeforeAfter: true,
          beforeAfterLabel: "Avant"
        },
        {
          src: "c10d27_376665e6f7e341a79df0966eda703a48~mv2_d_3264_1840_s_2.jpg",
          showBeforeAfter: true,
          beforeAfterLabel: "Après"
        }
      ],
      images_vertical: [],
      layout_horizontal: "row",
      layout_vertical: "row",
      vertical_position: "right"
    },
    {
      date: "Novembre 2017",
      title: "Lyon (69) : création d'une place de parking PMR dans une résidence privée",
      images_horizontal: [
        {
          src: "c10d27_7318d9493a674988a577f5ed4517a26b~mv2_d_3264_2448_s_4_2.jpg",
          showBeforeAfter: true,
          beforeAfterLabel: "Avant"
        },
        {
          src: "c10d27_3eae1f4172ff4f95bfd97fca07e61a70~mv2_d_3264_2448_s_4_2.jpg",
          showBeforeAfter: true,
          beforeAfterLabel: "Après"
        }
      ],
      images_vertical: [],
      layout_horizontal: "row",
      layout_vertical: "row",
      vertical_position: "right"
    },
    {
      date: "Octobre 2017",
      title: "Mions (69) : retraçage du parking + création d'un cheminement piéton",
      images_horizontal: [
        {
          src: "c10d27_36c6bfbacd5f4958922fb18d1758e2f0~mv2_d_3968_2976_s_4_2.jpg",
          showBeforeAfter: true,
          beforeAfterLabel: "Avant"
        },
        {
          src: "c10d27_3882f5b837074bf09424d9848e04cc79~mv2_d_3968_2976_s_4_2.jpg",
          showBeforeAfter: true,
          beforeAfterLabel: "Après"
        },
        {
          src: "c10d27_1caf73012c88468f8624f16b57b50493~mv2_d_3968_2976_s_4_2.jpg",
          showBeforeAfter: true,
          beforeAfterLabel: "Avant"
        },
        {
          src: "c10d27_eadf17130fdb45fcaa5b5547d8fb78a4~mv2_d_3968_2976_s_4_2.jpg",
          showBeforeAfter: true,
          beforeAfterLabel: "Après"
        }
      ],
      images_vertical: [],
      layout_horizontal: "row",
      layout_vertical: "row",
      vertical_position: "right"
    },
    {
      date: "Juin 2017",
      title: "Retraçage de 12 magasins dans la Loire, le Rhône et l'Ain",
      images_horizontal: [
        {
          src: "c10d27_5d98d06648e14fc080c37157f317ef18~mv2_d_3968_2240_s_2.jpg",
          showBeforeAfter: true,
          beforeAfterLabel: "Avant"
        },
        {
          src: "c10d27_595070de35c140b5b081195bf6579fce~mv2_d_3968_2240_s_2.jpg",
          showBeforeAfter: true,
          beforeAfterLabel: "Après"
        }
      ],
      images_vertical: [],
      layout_horizontal: "row",
      layout_vertical: "row",
      vertical_position: "right"
    },
    {
      date: "Septembre 2017",
      title: "Brignais (69) : traçage du parking refait à neuf",
      images_horizontal: [
        {
          src: "c10d27_d5f53b6041fe4e00bdd352b1775f84ce~mv2_d_3968_2976_s_4_2.jpg",
          showBeforeAfter: true,
          beforeAfterLabel: "Avant"
        },
        {
          src: "c10d27_7e4096a5b8d6466784ca42e3e30e5486~mv2_d_3968_2976_s_4_2.jpg",
          showBeforeAfter: true,
          beforeAfterLabel: "Après"
        }
      ],
      images_vertical: [],
      layout_horizontal: "row",
      layout_vertical: "row",
      vertical_position: "right"
    },
    {
      date: "Juin 2017",
      title: "Saint Fons (69) : création d'une zone de sécurité",
      images_horizontal: [
        {
          src: "c10d27_09e3eb64483b451198cbd710ab894e73~mv2.jpg",
          showBeforeAfter: true,
          beforeAfterLabel: "Avant"
        },
        {
          src: "c10d27_2a25e923cea349c78143963842ae54e0~mv2.jpg",
          showBeforeAfter: true,
          beforeAfterLabel: "Après"
        }
      ],
      images_vertical: [],
      layout_horizontal: "row",
      layout_vertical: "row",
      vertical_position: "right"
    },
    {
      date: "Date not specified",
      title: "Ecole de management de Lyon : parking Saint Louis",
      images_horizontal: [
        {
          src: "IMG_20200718_160222_0155_JPG.jpg",
          showBeforeAfter: false
        },
        {
          src: "IMG_20200718_160138_0153_JPG.jpg",
          showBeforeAfter: false
        }
      ],
      images_vertical: [],
      layout_horizontal: "col",
      layout_vertical: "row",
      vertical_position: "right"
    },
    {
      date: "Juin 2020",
      title: "Neuville sur Ain (01) : retraçage intégral du parking d'Intermarché",
      images_horizontal: [
        {
          src: "neuville_sur_ain.jpg",
          showBeforeAfter: false
        },
        {
          src: "IMG_20200625_121047_0129_JPG.jpg",
          showBeforeAfter: false
        }
      ],
      images_vertical: [],
      layout_horizontal: "col",
      layout_vertical: "row",
      vertical_position: "right"
    },
    {
      date: "Septembre 2017",
      title: "Irigny (69) : création d'une place handicapée",
      images_horizontal: [
        {
          src: "c10d27_9d1ee421371c4e55a708b9f75e6f441d~mv2_d_3264_2448_s_4_2.jpg",
          showBeforeAfter: true,
          beforeAfterLabel: "Avant"
        },
        {
          src: "c10d27_f5c4e246702d4295a268bee3cdb408a4~mv2_d_3264_2448_s_4_2.jpg",
          showBeforeAfter: true,
          beforeAfterLabel: "Après"
        }
      ],
      images_vertical: [],
      layout_horizontal: "row",
      layout_vertical: "row",
      vertical_position: "right"
    }
  ];
  

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    const imageModules = import.meta.glob('/public/photos_realisations/*');
    
    Promise.all(
      Object.keys(imageModules).map(path => {
        return path.replace('/public', '');
      })
    ).then(imagePaths => {
      setImages(imagePaths);
      setIsLoading(false);
    }).catch(err => {
      setError("Une erreur est survenue lors du chargement des images.");
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    function resizeAllGridItems() {
      const allItems = document.getElementsByClassName("realisation-group");
      for (let x = 0; x < allItems.length; x++) {
        resizeGridItem(allItems[x]);
      }
    }

    function resizeGridItem(item) {
      const grid = realisationsRef.current;
      const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
      const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('gap'));
      const height = item.getBoundingClientRect().height;
      const rowSpan = Math.ceil((height + rowGap) / (rowHeight + rowGap));
      item.style.setProperty('--row-span', rowSpan);
    }

    const observer = new ResizeObserver(entries => {
      for (let entry of entries) {
        resizeGridItem(entry.target);
      }
    });

    const allItems = document.getElementsByClassName("realisation-group");
    for (let x = 0; x < allItems.length; x++) {
      observer.observe(allItems[x]);
    }

    window.addEventListener('resize', resizeAllGridItems);
    resizeAllGridItems();

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', resizeAllGridItems);
    };
  }, [images]);

  if (error) {
    return (
      <section className="realisations">
        <h2>Nos réalisations</h2>
        <div className="error-message">
          {error}
        </div>
      </section>
    );
  }

  return (
    <section className="realisations">
      <h2>Nos réalisations</h2>
      {isLoading ? (
        <div className="loading">
          <div className="spinner"></div>
          <p>Chargement des réalisations...</p>
        </div>
      ) : (
        <div className="realisations-content" ref={realisationsRef}>
          {realisationsData.map((realisation, index) => (
            <div key={index} className="realisation-group">
              <div className="realisation-header">
                <span className="realisation-date">{realisation.date}</span>
                <h3 className="realisation-title">{realisation.title}</h3>
              </div>
              <div className={`realisation-images ${
                realisation.images_vertical.length > 0 ? 
                  (realisation.images_vertical.length === 4 || realisation.images_vertical.length === 2 ? 'vertical-grid' : 
                   (realisation.images_vertical.length === 2 && realisation.images_horizontal.length === 1 ? 'vertical-top-horizontal-bottom' :
                   `vertical-${realisation.vertical_position}`)) : 
                  realisation.layout_horizontal
              }`}>
                {realisation.images_vertical.length === 2 && realisation.images_horizontal.length === 1 ? (
                  <>
                    <div className="vertical-container">
                      {realisation.images_vertical.map((image, imgIndex) => (
                        <div key={`vertical-${imgIndex}`} className="realisation-image-container vertical">
                          <h4 className="image-title">
                            {image.showBeforeAfter ? image.beforeAfterLabel : ""}
                          </h4>
                          <div className="realisation-image">
                            <img 
                              src={`/assets/downloaded_images/${image.src}`}
                              alt={`${realisation.title} - ${image.beforeAfterLabel || ''}`}
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = '/placeholder.jpg';
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                    {realisation.images_horizontal.map((image, imgIndex) => (
                      <div key={imgIndex} className="realisation-image-container">
                        <h4 className="image-title">
                          {image.showBeforeAfter ? image.beforeAfterLabel : ""}
                        </h4>
                        <div className="realisation-image">
                          <img 
                            src={`/assets/downloaded_images/${image.src}`}
                            alt={`${realisation.title} - ${image.beforeAfterLabel || ''}`}
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = '/placeholder.jpg';
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </>
                ) : (
                  <>
                    {realisation.images_horizontal.map((image, imgIndex) => (
                      <div key={imgIndex} className="realisation-image-container">
                        <h4 className="image-title">
                          {image.showBeforeAfter ? image.beforeAfterLabel : ""}
                        </h4>
                        <div className="realisation-image">
                          <img 
                            src={`/assets/downloaded_images/${image.src}`}
                            alt={`${realisation.title} - ${image.beforeAfterLabel || ''}`}
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = '/placeholder.jpg';
                            }}
                          />
                        </div>
                      </div>
                    ))}
                    {realisation.images_vertical.map((image, imgIndex) => (
                      <div key={`vertical-${imgIndex}`} className="realisation-image-container vertical">
                        <h4 className="image-title">
                          {image.showBeforeAfter ? image.beforeAfterLabel : ""}
                        </h4>
                        <div className="realisation-image">
                          <img 
                            src={`/assets/downloaded_images/${image.src}`}
                            alt={`${realisation.title} - ${image.beforeAfterLabel || ''}`}
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = '/placeholder.jpg';
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Realisations; 