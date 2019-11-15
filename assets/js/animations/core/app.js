import Pages from './pages.js';

export default class App
{

    // SETUP -------------------------------------------------------------------

    constructor()
    {
        // DOM

        this._root;

        // page

        this._pageID;
        this._sections;
        this._numSections;

        this._activeSection;
        this._activeSectionIndex = -1;

        // window

        this._width           = 0.0;
        this._height          = 0.0;
        this._centerY         = 0.0;

        this._scrollPosition  = 0.0;
        this._scrollDirection = -1.0;

        this._setupSections = this._setupSections.bind(this);
        this.resize = this.resize.bind(this);
    }

    setup()
    {
        this._root = document.body;


        if (!this._root)
            throw new Error('app.js -- No div with ID "main" found.');


        this._pageID = "HOME"
        this._page   = Pages[this._pageID];

        const sections = [];
        sections.push(this._root.querySelector('section.safer-section'));
        sections.push(this._root.querySelector('section.bg-wave'));
        // set up page sections
        this._setupSections(sections);

        this.resize();
        this._start();
    }

    _setupSections(sections)
    {
        if (!sections) {
            return;
        }

        this._sections    = [];
        this._numSections = sections.length;

        sections.forEach(( section, i ) => {
            if (this._page[i])
                this._sections.push(new this._page[i]({ element: section }));
        });
    }


    // WINDOW ------------------------------------------------------------------

    resize()
    {

        this._width   = document.body.clientWidth;
        this._height  = window.innerHeight;
        this._centerY = this._height * 0.5;

        // sections

        let yPos = 0.0;

        this._sections.forEach(( section ) =>
        {
            section.resize(this._width, this._height, yPos);
            yPos += section.height;
        });

        this.scroll();
    }

    scroll()
    {

        const scrollPosition  = window.pageYOffset;

        this._scrollDirection = (scrollPosition > this._scrollPosition) ? -1.0 : 1.0;
        this._scrollPosition  =  scrollPosition;

        this._updateSections();
    }


    // STATE -------------------------------------------------------------------

    _start()
    {
    }

    _updateSections()
    {
        for (let i = 0; i < this._numSections; i++)
        {
            const section = this._sections[i];
            if (!section)
                continue;
            
        }
    }


    // UPDATE ------------------------------------------------------------------

    update()
    {
    }
}