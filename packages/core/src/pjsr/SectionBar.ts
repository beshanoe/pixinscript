//     ____       __ _____  ____
//    / __ \     / // ___/ / __ \
//   / /_/ /__  / / \__ \ / /_/ /
//  / ____// /_/ / ___/ // _, _/   PixInsight JavaScript Runtime
// /_/     \____/ /____//_/ |_|    PJSR Version 1.0
// ----------------------------------------------------------------------------
// pjsr/SectionBar.jsh - Released 2020-12-12T20:55:24Z
// ----------------------------------------------------------------------------
// This file is part of the PixInsight JavaScript Runtime (PJSR).
// PJSR is an ECMA-262-5 compliant framework for development of scripts on the
// PixInsight platform.
//
// Copyright (c) 2003-2020 Pleiades Astrophoto S.L. All Rights Reserved.
//
// Redistribution and use in both source and binary forms, with or without
// modification, is permitted provided that the following conditions are met:
//
// 1. All redistributions of source code must retain the above copyright
//    notice, this list of conditions and the following disclaimer.
//
// 2. All redistributions in binary form must reproduce the above copyright
//    notice, this list of conditions and the following disclaimer in the
//    documentation and/or other materials provided with the distribution.
//
// 3. Neither the names "PixInsight" and "Pleiades Astrophoto", nor the names
//    of their contributors, may be used to endorse or promote products derived
//    from this software without specific prior written permission. For written
//    permission, please contact info@pixinsight.com.
//
// 4. All products derived from this software, in any form whatsoever, must
//    reproduce the following acknowledgment in the end-user documentation
//    and/or other materials provided with the product:
//
//    "This product is based on software from the PixInsight project, developed
//    by Pleiades Astrophoto and its contributors (https://pixinsight.com/)."
//
//    Alternatively, if that is where third-party acknowledgments normally
//    appear, this acknowledgment must be reproduced in the product itself.
//
// THIS SOFTWARE IS PROVIDED BY PLEIADES ASTROPHOTO AND ITS CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED
// TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
// PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL PLEIADES ASTROPHOTO OR ITS
// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
// EXEMPLARY OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, BUSINESS
// INTERRUPTION; PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; AND LOSS OF USE,
// DATA OR PROFITS) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.
// ----------------------------------------------------------------------------

import { MouseButton_Left } from "./ButtonCodes";
import { FocusStyle_NoFocus } from "./FocusStyle";
import { HorizontalSizer, VerticalSizer } from "./Sizer";
import { TextAlign_Left, TextAlign_VertCenter } from "./TextAlign";

// ----------------------------------------------------------------------------

/*
 * SectionBar
 *
 * A specialized control to manage vertically collapsible/extensible sections
 * on dialogs.
 *
 * SectionBar provides an optional check box and a title label, similar to a
 * GroupBox. SectionBar also includes a special icon that represents the
 * current collapsed/extended state.
 */
export const collapse_icon = ":/process-interface/contract-vert.png";
export const expand_icon = ":/process-interface/expand-vert.png";

export interface SectionBar {
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

export interface SectionBarConstructor {
  new (parent?: Control, title?: string, collapsible?: boolean): SectionBar;
  prototype: Control;
}

// @ts-ignore
export var SectionBar: SectionBarConstructor = function (
  parent?: Control,
  title?: string,
  collapsible?: boolean
) {
  this.__base__ = Control;
  if (parent) this.__base__(parent);
  else this.__base__();

  this.objectId = "IWSectionBar";
  this.focusStyle = FocusStyle_NoFocus;

  this.collapsible = collapsible == undefined || collapsible;

  this.onToggleSection = null;
  this.onCheckSection = null;

  this.section = null;

  this.checkBox = null;

  this.label = new Label(this);
  this.label.textAlignment = TextAlign_Left | TextAlign_VertCenter;
  this.label.text = title ? title : "";

  if (this.collapsible) {
    this.button = new ToolButton(this);
    this.button.icon = this.scaledResource(collapse_icon);
    this.button.setScaledFixedSize(17, 17);
    this.button.focusStyle = FocusStyle_NoFocus;
    this.button.onClick = function () {
      this.parent.toggleSection();
    };
  } else this.setScaledMinHeight(19);

  this.hSizer = new HorizontalSizer();
  this.hSizer.addSpacing(4);
  this.hSizer.add(this.label);
  this.hSizer.addStretch();
  if (this.collapsible) {
    this.hSizer.addSpacing(4);
    this.hSizer.add(this.button);
  }
  this.hSizer.addSpacing(4);

  this.sizer = new VerticalSizer();
  this.sizer.addSpacing(1);
  this.sizer.add(this.hSizer);
  this.sizer.addSpacing(1);

  this.adjustToContents();
  this.setFixedHeight();

  this.hasCheckBox = function () {
    return this.checkBox instanceof CheckBox;
  };

  this.isChecked = function () {
    return this.hasCheckBox() && this.checkBox.checked;
  };

  this.enableCheckBox = function () {
    if (!this.hasCheckBox()) {
      this.checkBox = new CheckBox(this);
      this.checkBox.focusStyle = FocusStyle_NoFocus;
      this.checkBox.checked = true;
      this.checkBox.onClick = function (checked) {
        if (this.parent.section instanceof Control)
          this.parent.section.enabled = checked;
        if (this.parent.onCheckSection instanceof Function)
          this.parent.onCheckSection(this.parent);
      };

      this.hSizer.insert(1, this.checkBox);
      this.hSizer.insertSpacing(2, 2);
    }
  };

  this.title = function () {
    return this.label.text;
  };

  this.setTitle = function (title) {
    this.label.text = title;
  };

  this.hasSection = function () {
    return this.section instanceof Control;
  };

  this.setSection = function (section) {
    if (section instanceof Control) {
      if (
        (<any>section).__section_onShow__ != undefined ||
        (<any>section).__section_onHide__ != undefined ||
        (<any>section).__section_secbar__ != undefined
      ) {
        this.setSection(null);
        this.setSection(section);
        return;
      }

      this.section = section;
      this.section.__section_onShow__ = this.section.onShow;
      this.section.__section_onHide__ = this.section.onHide;
      this.section.__section_secbar__ = this;
      this.section.onShow = function () {
        this.__section_secbar__.updateIcon();
        if (this.__section_onShow__ instanceof Function)
          this.__section_onShow__();
      };
      this.section.onHide = function () {
        this.__section_secbar__.updateIcon();
        if (this.__section_onHide__ instanceof Function)
          this.__section_onHide__();
      };
      if (this.hasCheckBox()) this.section.enabled = this.checkBox.checked;
    } else {
      if (this.hasSection()) {
        if (this.section.__section_onShow__)
          this.section.onShow = this.section.__section_onShow__;
        else this.section.onShow = undefined;
        if (this.section.__section_onHide__)
          this.section.onHide = this.section.__section_onHide__;
        else this.section.onHide = undefined;
        this.section.__section_onShow__ = undefined;
        this.section.__section_onHide__ = undefined;
        this.section.__section_secbar__ = undefined;
      }
      this.section = null;
    }

    this.updateIcon();
  };

  this.isExpanded = function () {
    return this.hasSection() && this.section.visible;
  };

  this.isCollapsed = function () {
    return this.hasSection() && !this.section.visible;
  };

  this.toggleSection = function () {
    if (this.hasSection()) {
      if (typeof this.onToggleSection === "function")
        this.onToggleSection(this, true /*toggleBegin*/);

      this.dialog.canUpdate = false;

      let fixedWidth = this.dialog.isFixedWidth;
      let saveMinWidth, saveMaxWidth;
      if (!fixedWidth) {
        saveMinWidth = this.dialog.minWidth;
        saveMaxWidth = this.dialog.maxWidth;
        this.dialog.setFixedWidth();
      }

      let fixedHeight = this.dialog.isFixedHeight;
      if (fixedHeight) this.dialog.setVariableHeight();

      if (this.section.visible) this.section.hide();
      else {
        this.section.adjustToContents();
        this.section.show();
      }

      this.dialog.adjustToContents();

      if (!fixedWidth) {
        this.dialog.minWidth = saveMinWidth;
        this.dialog.maxWidth = saveMaxWidth;
      }

      if (fixedHeight) this.dialog.setFixedHeight();

      this.dialog.canUpdate = true;

      if (typeof this.onToggleSection === "function")
        this.onToggleSection(this, false /*toggleBegin*/);
    }
  };

  this.updateSection = function () {
    if (this.hasSection()) {
      this.dialog.setFixedWidth();
      this.dialog.adjustToContents();
      this.dialog.setVariableWidth();
    }
  };

  //

  if (this.collapsible)
    this.onMousePress = function (x, y, button) {
      if (button == MouseButton_Left) this.toggleSection();
    };

  this.onShow = function () {
    //this.updateIcon();
  };

  this.updateIcon = function () {
    if (this.collapsible)
      this.button.icon = this.scaledResource(
        this.isExpanded() ? collapse_icon : expand_icon
      );
  };
};

SectionBar.prototype = new Control();

// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// EOF pjsr/SectionBar.jsh - Released 2020-12-12T20:55:24Z
