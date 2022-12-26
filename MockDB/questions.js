// Questions
const data = [
    {
        id: 0,
        text_question: "Seleccione su grado",
        is_shared: false,
        idQuestion: 0,
        answerOptions: []
    },
    {
        id: 1,
        text_question: "La transformación del Ejército ha generado cambios en las REGLAS que afectan el comportamiento de los miembros de la Fuerza",
        is_shared: false,
        idQuestion: 0,
        answerOptions: []
    },
    {
        id: 2,
        text_question: "Estos cambios en las REGLAS se deben a los esfuerzos (proyectos, planes, órdenes, etc..)  desarrollados sobre",
        is_shared: true,
        idQuestion: 0,
        answerOptions: []
    },
    {
        id: 1,
        text_question: "La transformación del Ejército  ha generado cambios en los VALORES COMPARTIDOS (cualidades, virtudes y principios) que afectan el comportamiento de los miembros de la Fuerza",
        is_shared: false,
        idQuestion: 0,
        answerOptions: []
    },
    {
        id: 2,
        text_question: "Estos cambios en los VALORES COMPARTIDOS se deben a los esfuerzos (proyectos, planes, órdenes, etc..)  desarrollados sobre",
        is_shared: true,
        idQuestion: 0,
        answerOptions: []
    },
    {
        id: 1,
        text_question: "La transformación del Ejército  ha generado cambios en las EXPECTATIVAS (esperanzas o ilusiones de lograr algo) que afectan el comportamiento de los miembros de la Fuerza",
        is_shared: false,
        idQuestion: 0,
        answerOptions: []
    },
    {
        id: 2,
        text_question: "Estos cambios en las EXPECTATIVAS se deben a los esfuerzos (proyectos, planes, órdenes, etc..)  desarrollados sobre",
        is_shared: true,
        idQuestion: 0,
        answerOptions: []
    },

    {
        id: 1,
        text_question: "La transformación del Ejército  ha generado cambios en los ESTÁNDARES (especificaciones que guían el desarrollo de actividades) que afectan el comportamiento de los miembros de la Fuerza",
        is_shared: false,
        idQuestion: 0,
        answerOptions: []
    },
    {
        id: 2,
        text_question: "Estos cambios en los ESTÁNDARES se deben a los esfuerzos (proyectos, planes, órdenes, etc..)  desarrollados sobre",
        is_shared: true,
        idQuestion: 0,
        answerOptions: []
    },

    {
        id: 1,
        text_question: "La transformación del Ejército  ha generado cambios en las CATEGORIAS, DISTINCIONES Y TIPIFICACIONES (clasificaciones que se usan para comprender la realidad, por ejemplo: GAO y GDO) que afectan el comportamiento de los miembros de la Fuerza",
        is_shared: false,
        idQuestion: 0,
        answerOptions: []
    },
    {
        id: 2,
        text_question: "Estos cambios en las CATEGORIAS, DISTINCIONES Y TIPIFICACIONES se deben a los esfuerzos (proyectos, planes, órdenes, etc..)  desarrollados sobre",
        is_shared: true,
        idQuestion: 0,
        answerOptions: []
    },

    {
        id: 1,
        text_question: "La transformación del Ejército  ha generado cambios en los SISTEMAS DE GOBERNANZA QUE PERMITEN EJERCER AUTORIDAD (por ejemplo: canales de comunicación y de órdenes desde el nivel estratégico al táctico) que afectan el comportamiento de los miembros de la Fuerza",
        is_shared: false,
        idQuestion: 0,
        answerOptions: []
    },
    {
        id: 2,
        text_question: "Estos cambios en los SISTEMAS DE GOBERNANZA QUE PERMITEN EJERCER AUTORIDAD se deben a los esfuerzos (proyectos, planes, órdenes, etc..)  desarrollados sobre",
        is_shared: true,
        idQuestion: 0,
        answerOptions: []
    },

    {
        id: 1,
        text_question: "La transformación del Ejército  ha generado cambios en los SISTEMAS DE PODER Y COERCIÓN QUE PERMITEN CONTROLAR (por ejemplo: sistemas de información y protocolos para hacer reportes o informes) que afectan el comportamiento de los miembros de la Fuerza",
        is_shared: false,
        idQuestion: 0,
        answerOptions: []
    },
    {
        id: 2,
        text_question: "Estos cambios en los SISTEMAS DE PODER Y COERCIÓN QUE PERMITEN CONTROLAR se deben a los esfuerzos (proyectos, planes, órdenes, etc..)  desarrollados sobre",
        is_shared: true,
        idQuestion: 0,
        answerOptions: []
    },

    {
        id: 1,
        text_question: "La transformación del Ejército  ha generado cambios en los SISTEMAS BASADOS EN VALORES Y NORMAS QUE PERMITEN A SUS MIEMBROS RELACIONARSE EN EL DÍA A DÍA (por ejemplo:  códigos de conducta) que afectan el comportamiento de los miembros de la Fuerza",
        is_shared: false,
        idQuestion: 0,
        answerOptions: []
    },
    {
        id: 2,
        text_question: "Estos cambios en los SISTEMAS BASADOS EN VALORES Y NORMAS QUE PERMITEN A SUS MIEMBROS RELACIONARSE EN EL DÍA A DÍA se deben a los esfuerzos (proyectos, planes, órdenes, etc..)  desarrollados sobre",
        is_shared: true,
        idQuestion: 0,
        answerOptions: []
    },

    {
        id: 1,
        text_question: "La transformación del Ejército  ha generado la ADOPCIÓN DE FORMAS Y ESTRUCTURAS SIMILARES A OTRAS FUERZAS  (por ejemplo:  creación de dependencias o unidades que existen en otras Fuerzas) que afectan el comportamiento de los miembros de la Fuerza",
        is_shared: false,
        idQuestion: 0,
        answerOptions: []
    },
    {
        id: 2,
        text_question: "La ADOPCIÓN DE FORMAS Y ESTRUCTURAS SIMILARES A OTRAS FUERZAS  se debe a los esfuerzos (proyectos, planes, órdenes, etc..)  desarrollados sobre",
        is_shared: true,
        idQuestion: 0,
        answerOptions: []
    },

    {
        id: 1,
        text_question: "La transformación del Ejército  ha generado la ADOPCIÓN DE RELACIONES ENTRE FORMAS Y ESTRUCTURAS SIMILARES A OTRAS FUERZAS (por ejemplo:  creación de procesos  o protocolos que se usan en otras Fuerzas) que afectan el comportamiento de los miembros de la Fuerza",
        is_shared: false,
        idQuestion: 0,
        answerOptions: []
    },
    {
        id: 2,
        text_question: "La ADOPCIÓN DE RELACIONES ENTRE FORMAS Y ESTRUCTURAS SIMILARES A OTRAS FUERZAS  se debe a los esfuerzos (proyectos, planes, órdenes, etc..)  desarrollados sobre",
        is_shared: true,
        idQuestion: 0,
        answerOptions: []
    },

    {
        id: 1,
        text_question: "La transformación del Ejército  ha generado la ADOPCIÓN DE RELACIONES ENTRE FORMAS Y ESTRUCTURAS SIMILARES A OTRAS FUERZAS (por ejemplo:  creación de procesos  o protocolos que se usan en otras Fuerzas) que afectan el comportamiento de los miembros de la Fuerza",
        is_shared: false,
        idQuestion: 0,
        answerOptions: []
    },
    {
        id: 2,
        text_question: "La ADOPCIÓN DE RELACIONES ENTRE FORMAS Y ESTRUCTURAS SIMILARES A OTRAS FUERZAS  se debe a los esfuerzos (proyectos, planes, órdenes, etc..)  desarrollados sobre",
        is_shared: true,
        idQuestion: 0,
        answerOptions: []
    },

    {
        id: 1,
        text_question: "La transformación del Ejército  ha generado cambios en la IDENTIDAD DE LA FUERZA (por ejemplo en su misión o principios) que afectan el comportamiento de los miembros de la Fuerza",
        is_shared: false,
        idQuestion: 0,
        answerOptions: []
    },
    {
        id: 2,
        text_question: "Los cambios en la IDENTIDAD DE LA FUERZA   se deben a los esfuerzos (proyectos, planes, órdenes, etc..)  desarrollados sobre",
        is_shared: true,
        idQuestion: 0,
        answerOptions: []
    },

    {
        id: 1,
        text_question: "La transformación del Ejército  ha generado cambios en las TAREAS DE SEGUIMIENTO, SANCIÓN, Y RESPUESTA AL CUMPLIMIENTO O DESVIACIÓN FRENTE A LO ESPERADO (por ejemplo: protocolos de control al personal o a unidades/dependencias) que afectan el comportamiento de los miembros de la Fuerza",
        is_shared: false,
        idQuestion: 0,
        answerOptions: []
    },
    {
        id: 2,
        text_question: "Los cambios en las TAREAS DE SEGUIMIENTO, SANCIÓN, Y RESPUESTA AL CUMPLIMIENTO O DESVIACIÓN FRENTE A LO ESPERADO se deben a los esfuerzos (proyectos, planes, órdenes, etc..)  desarrollados sobre",
        is_shared: true,
        idQuestion: 0,
        answerOptions: []
    },

    {
        id: 1,
        text_question: "La transformación del Ejército  ha generado cambios en los ROLES (EN GENERAL), y los TRABAJOS (ESPECÍFICAMENTE) DESARROLLADOS de los miembros de la Fuerza",
        is_shared: false,
        idQuestion: 0,
        answerOptions: []
    },
    {
        id: 2,
        text_question: "Los cambios en los ROLES (EN GENERAL), y los TRABAJOS (ESPECÍFICAMENTE) DESARROLLADOS se deben a los esfuerzos (proyectos, planes, órdenes, etc..)  desarrollados sobre ",
        is_shared: true,
        idQuestion: 0,
        answerOptions: []
    },

    {
        id: 1,
        text_question: "La transformación del Ejército  ha generado cambios en las RUTINAS (costumbres  adquiridas de hacer algo de un modo determinado, que no requieren  reflexionar o decidir) de los miembros de la Fuerza",
        is_shared: false,
        idQuestion: 0,
        answerOptions: []
    },
    {
        id: 2,
        text_question: "Los cambios en las RUTINAS se deben a los esfuerzos (proyectos, planes, órdenes, etc..)  desarrollados sobre",
        is_shared: true,
        idQuestion: 0,
        answerOptions: []
    },

    {
        id: 1,
        text_question: "La transformación del Ejército  ha generado cambios en los HÁBITOS (modos especiales de proceder que son llevados a cabo con regularidad ) de los miembros de la Fuerza",
        is_shared: false,
        idQuestion: 0,
        answerOptions: []
    },
    {
        id: 2,
        text_question: "Los cambios en los HÁBITOS se deben a los esfuerzos (proyectos, planes, órdenes, etc..)  desarrollados sobre",
        is_shared: true,
        idQuestion: 0,
        answerOptions: []
    },

    {
        id: 1,
        text_question: "La transformación del Ejército  ha generado cambios en las FORMAS DE ACCIÓN DISTINTIVAS DE LA FUERZA (por ejemplo: expresiones de humor e ironía, expresiones artísticas, etc ) desarrolladas por los miembros de la Fuerza",
        is_shared: false,
        idQuestion: 0,
        answerOptions: []
    },
    {
        id: 2,
        text_question: "Los cambios en las FORMAS DE ACCIÓN DISTINTIVAS DE LA FUERZA se deben a los esfuerzos (proyectos, planes, órdenes, etc..)  desarrollados sobre",
        is_shared: true,
        idQuestion: 0,
        answerOptions: []
    },

    {
        id: 1,
        text_question: "La transformación del Ejército  ha generado cambios en las PREDISPOSICIONES Y GUIONES (por ejemplo, respuestas ante preguntas de medios de comunicación, o cuestionamientos de otros actores) de los miembros de la Fuerza",
        is_shared: false,
        idQuestion: 0,
        answerOptions: []
    },
    {
        id: 2,
        text_question: "Los cambios en las  PREDISPOSICIONES Y GUIONES se deben a los esfuerzos (proyectos, planes, órdenes, etc..)  desarrollados sobre",
        is_shared: true,
        idQuestion: 0,
        answerOptions: []
    },

    {
        id: 1,
        text_question: "La transformación del Ejército  ha generado cambios en los OBJETOS QUE POSEEN VALOR SIMBÓLICO (por ejemplo, medallas y distinciones) de la Fuerza",
        is_shared: false,
        idQuestion: 0,
        answerOptions: []
    },
    {
        id: 2,
        text_question: "Los cambios en los OBJETOS QUE POSEEN VALOR SIMBÓLICO se deben a los esfuerzos (proyectos, planes, órdenes, etc..)  desarrollados sobre",
        is_shared: true,
        idQuestion: 0,
        answerOptions: []
    },

    {
        id: 1,
        text_question: "La transformación del Ejército  ha generado cambios en los OBJETOS QUE CUMPLEN CONVENCIONES Y NORMAS (por ejemplo, estándares técnicos y acuerdos que se generalizan)  de la Fuerza",
        is_shared: false,
        idQuestion: 0,
        answerOptions: []
    },
    {
        id: 2,
        text_question: "Los cambios en los OBJETOS QUE CUMPLEN CONVENCIONES Y NORMAS se deben a los esfuerzos (proyectos, planes, órdenes, etc..)  desarrollados sobre",
        is_shared: true,
        idQuestion: 0,
        answerOptions: []
    },

    {
        id: 1,
        text_question: "La transformación del Ejército  ha generado cambios en los OBJETOS QUE CUMPLEN CON ESPECIFICACIONES PRODUCTO DE REGULACIONES (por ejemplo, equipos y armas) de la Fuerza",
        is_shared: false,
        idQuestion: 0,
        answerOptions: []
    },
    {
        id: 2,
        text_question: "Los cambios en los OBJETOS QUE CUMPLEN CON ESPECIFICACIONES PRODUCTO DE REGULACIONES se deben a los esfuerzos (proyectos, planes, órdenes, etc..)  desarrollados sobre",
        is_shared: true,
        idQuestion: 0,
        answerOptions: []
    },
]
