class Tabs {
    #tabs;

    static CLASS_BUTTON = "tabs__button";
    static CLASS_OPEN = "open";
    static CLASS_ITEMS = "tabs__item";
    static CLASS_CHANGE = "changeBg";

    constructor(tabs) {
        this.#tabs = tabs;

        this.tabsAddClass();
        this.tabsEvents();
    }

    tabsEvents() {
        this.#tabs.addEventListener("click", (e) => this.onTabsClick(e));
    }

    tabsAddClass() {
        const containers = this.#tabs.children;
        const [buttonContainer, contentContainer] = containers;
        const buttons = buttonContainer.children;

        for (let container of containers) {
            container.classList.add("tabs__container");
        }

        for (let i = 0; i < buttons.length; i++) {
            const button = buttons[i];
            const content = contentContainer.children[i];
            button.classList.add(Tabs.CLASS_BUTTON);
            content.classList.add(Tabs.CLASS_ITEMS);
            button.classList.add(Tabs.CLASS_BUTTON + "-" + (i + 1));
            content.classList.add(Tabs.CLASS_ITEMS + "-" + (i + 1));
        }

        const firstTab = contentContainer.querySelector(
            "." + Tabs.CLASS_ITEMS + "-1"
        );
        const firstBtn = buttons[0];

        this.toggleClass(firstTab, Tabs.CLASS_OPEN);
        this.toggleClass(firstBtn, Tabs.CLASS_CHANGE);
    }

    onTabsClick(e) {
        const buttonOne = this.containsClassButton(e.target, 1);
        const buttonTwo = this.containsClassButton(e.target, 2);
        const buttonTree = this.containsClassButton(e.target, 3);
        const allTabsContent = this.#tabs.querySelectorAll(
            "." + Tabs.CLASS_ITEMS
        );
        const allBtn = this.#tabs.querySelectorAll("." + Tabs.CLASS_BUTTON);

        if (buttonOne) {
            this.removeClass(allTabsContent, allBtn);
            this.toggleClass(allTabsContent[0], Tabs.CLASS_OPEN);
            this.toggleClass(allBtn[0], Tabs.CLASS_CHANGE);
        }

        if (buttonTwo) {
            this.removeClass(allTabsContent, allBtn);
            this.toggleClass(allTabsContent[1], Tabs.CLASS_OPEN);
            this.toggleClass(allBtn[1], Tabs.CLASS_CHANGE);
        }

        if (buttonTree) {
            this.removeClass(allTabsContent, allBtn);
            this.toggleClass(allTabsContent[2], Tabs.CLASS_OPEN);
            this.toggleClass(allBtn[2], Tabs.CLASS_CHANGE);
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

    containsClassButton(target, num) {
        return target.classList.contains(Tabs.CLASS_BUTTON + "-" + num);
    }
}

export default Tabs;
