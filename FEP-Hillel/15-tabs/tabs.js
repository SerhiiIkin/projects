class Tabs {
    #tabs;

    static CLASS_BUTTON = "tabs__button";
    static CLASS_OPEN = "open";
    static CLASS_ITEMS = "tabs__item";
    static CLASS_TABS = "#tabs";

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

        this.toggleClassOpen(firstTab);
    }

    onTabsClick(e) {
        const buttonOne = this.containsClassButton(e.target, 1);
        const buttonTwo = this.containsClassButton(e.target, 2);
        const buttonTree = this.containsClassButton(e.target, 3);
        const allTabsContent = e.target
            .closest(Tabs.CLASS_TABS)
            .querySelectorAll("." + Tabs.CLASS_ITEMS);

        if (buttonOne) {
            this.removeClassOpen(allTabsContent);

            this.toggleClassOpen(allTabsContent[0]);
        }

        if (buttonTwo) {
            this.removeClassOpen(allTabsContent);

            this.toggleClassOpen(allTabsContent[1]);
        }

        if (buttonTree) {
            this.removeClassOpen(allTabsContent);

            this.toggleClassOpen(allTabsContent[2]);
        }
    }

    removeClassOpen(allTabs) {
        allTabs.forEach((tab) => {
            if (tab.classList.contains(Tabs.CLASS_OPEN)) {
                this.toggleClassOpen(tab);
            }
        });
    }

    toggleClassOpen(el) {
        el.classList.toggle(Tabs.CLASS_OPEN);
    }

    containsClassButton(target, num) {
        return target.classList.contains(Tabs.CLASS_BUTTON + "-" + num);
    }
}

export default Tabs;
