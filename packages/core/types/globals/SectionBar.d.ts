declare class SectionBar {
    constructor(parent?: Control, title?: string);

    checkBox: CheckBox;
    section: Control;

    onCheckSection(bar: SectionBar): void;
    onToggleSection(bar: SectionBar, toggleBegin: Boolean): void;

    enableCheckBox(): void;
    hasCheckBox(): Boolean;
    hasSection(): Boolean;
    isChecked(): Boolean;
    isCollapsed(): Boolean;
    isExpanded(): Boolean;
    setSection(section: Control): void;
    setTitle(title: String): void;
    title(): String;
    toggleSection(): void;
    updateSection(): void;
}
