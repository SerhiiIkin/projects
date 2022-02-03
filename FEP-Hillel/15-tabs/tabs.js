class Tabs {
    #tabs;

    static CLASS_BUTTON = "tabs__button";
    static CLASS_OPEN = "open";
    static CLASS_ITEMS = "tabs__item";
    static CLASS_CHANGE = "changeBg";

    constructor(tabs) {
        this.#tabs = tabs;
        this.buttons = this.#tabs.children[0].children;
        this.contents = this.#tabs.children[1].children;
        this.tabs = this.#tabs.children[0];

        this.tabsAddClass();
        this.tabsEvents();
    }

    tabsEvents() {
        this.tabs.addEventListener("click", (e) => this.onTabsClick(e));
    }

    tabsAddClass() {
        for (let i = 0; i < this.buttons.length; i++) {
            const button = this.buttons[i];
            const content = this.contents[i];
            button.classList.add(Tabs.CLASS_BUTTON);
            content.classList.add(Tabs.CLASS_ITEMS);
        }

        const firstTab = this.contents[0];
        const firstBtn = this.buttons[0];

        this.toggleClass(firstTab, Tabs.CLASS_OPEN);
        this.toggleClass(firstBtn, Tabs.CLASS_CHANGE);
    }

    onTabsClick(e) {
        const allTabsContent = this.#tabs.querySelectorAll(
            "." + Tabs.CLASS_ITEMS
        );
        const allBtn = this.#tabs.querySelectorAll("." + Tabs.CLASS_BUTTON);

        if (e.target.closest("." + Tabs.CLASS_BUTTON)) {
            const index = this.findBtn(e.target, allBtn);
            this.removeClass(allTabsContent, allBtn);
            this.toggleClass(allTabsContent[index], Tabs.CLASS_OPEN);
            this.toggleClass(allBtn[index], Tabs.CLASS_CHANGE);
        }
    }

    findBtn(target, allBtn) {
        for (let i = 0; i < allBtn.length; i++) {
            const btn = allBtn[i];
            if (btn === target) {
                return i;
            }
        }
    }

    removeClass(allTabs, allBtn) {
        for (let i = 0; i < allBtn.length; i++) {
            const btn = allBtn[i];
            const tab = allTabs[i];

            if (btn.classList.contains(Tabs.CLASS_CHANGE)) {
                this.toggleClass(btn, Tabs.CLASS_CHANGE);
            }

            if (tab.classList.contains(Tabs.CLASS_OPEN)) {
                this.toggleClass(tab, Tabs.CLASS_OPEN);
            }
        }
    }

    toggleClass(el, elClass) {
        el.classList.toggle(elClass);
    }
}

export default Tabs;
