//     ____       __ _____  ____
//    / __ \     / // ___/ / __ \
//   / /_/ /__  / / \__ \ / /_/ /
//  / ____// /_/ / ___/ // _, _/   PixInsight JavaScript Runtime
// /_/     \____/ /____//_/ |_|    PJSR Version 1.0
// ----------------------------------------------------------------------------
// pjsr/ColorComboBox.jsh - Released 2020-12-12T20:55:24Z
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

import { Color } from "./Color";

// Icon metrics in logical pixels
export const ICONSIZE = 16;
export const ICONMARGIN = 2;

// ----------------------------------------------------------------------------

/*
 * ComboColor - A collection of CSS3 color/name items sorted by hue/value.
 */
export function ComboColor(value, name?) {
  this.value = value;
  this.name = name;

  this.icon = function (size, margin) {
    let icon = new Bitmap(size, size);
    icon.fill(0); // transparent
    let g = new Graphics(icon);
    g.antialiasing = true;
    g.pen = new Pen(0xff000000, margin / 2); // opaque black pen
    if (this.value != 0) {
      g.brush = new Brush(this.value);
      g.drawRect(margin, margin, size - margin - 1, size - margin - 1);
    } else {
      g.brush = new Brush(0xffffffff);
      g.drawRect(margin, margin, size - margin - 1, size - margin - 1);
      g.drawLine(margin, margin, size - margin, size - margin);
      g.drawLine(size - margin + 1, margin, margin + 1, size - margin);
    }
    g.end();
    return icon;
  };

  this.title = function () {
    return this.name;
    // + format( " (%d,%d,%d)", Color.red( this.value ), Color.green( this.value ), Color.blue( this.value ) );
  };

  function myHue(rgb) {
    let r = Color.red(rgb);
    let g = Color.green(rgb);
    let b = Color.blue(rgb);

    if (r == g && r == b)
      // if this is a gray color
      return -1;

    let max = Math.max(Math.max(r, g), b);
    let delta = 255.0 * (max - Math.min(Math.min(r, g), b));
    let h;
    if (r == max) h = (60 * (g - b)) / delta;
    // between yellow & magenta
    else if (g == max) h = 120 + (60 * (b - r)) / delta;
    // between cyan & yellow
    else h = 240 + (60 * (r - g)) / delta; // between magenta & cyan

    if (h < 0) h += 360;

    return h;
  }

  function myValue(rgb) {
    return Color.red(rgb) + Color.green(rgb) + Color.blue(rgb);
  }

  this.H = myHue(this.value);
  this.V = myValue(this.value);

  this.isEqualTo = function (c) {
    return this.value == c.value;
  };

  this.isLessThan = function (c) {
    if (this.H != c.H) return this.H < c.H;
    if (this.V != c.V) return this.V < c.V;
    return this.V < c.V;
  };
}

ComboColor.prototype = new Object();

ComboColor.colors = new Array();

ComboColor.isInitialized = function () {
  return ComboColor.colors.length != 0;
};

ComboColor.initColors = function (useWebColors?: boolean) {
  ComboColor.colors.length = 0;

  if (useWebColors) {
    // Standard web color set
    ComboColor.colors.push(new ComboColor(0xff00ffff, "Aqua"));
    ComboColor.colors.push(new ComboColor(0xff000000, "Black"));
    ComboColor.colors.push(new ComboColor(0xff0000ff, "Blue"));
    ComboColor.colors.push(new ComboColor(0xff00ffff, "Cyan"));
    ComboColor.colors.push(new ComboColor(0xff808080, "Gray"));
    ComboColor.colors.push(new ComboColor(0xff008000, "Green"));
    ComboColor.colors.push(new ComboColor(0xffadd8e6, "LightBlue"));
    ComboColor.colors.push(new ComboColor(0xff00ff00, "Lime"));
    ComboColor.colors.push(new ComboColor(0xffff00ff, "Magenta"));
    ComboColor.colors.push(new ComboColor(0xff800000, "Maroon"));
    ComboColor.colors.push(new ComboColor(0xff000080, "Navy"));
    ComboColor.colors.push(new ComboColor(0xff808000, "Olive"));
    ComboColor.colors.push(new ComboColor(0xffffa500, "Orange"));
    ComboColor.colors.push(new ComboColor(0xff800080, "Purple"));
    ComboColor.colors.push(new ComboColor(0xffff0000, "Red"));
    ComboColor.colors.push(new ComboColor(0xffc0c0c0, "Silver"));
    ComboColor.colors.push(new ComboColor(0xff008080, "Teal"));
    ComboColor.colors.push(new ComboColor(0xffee82ee, "Violet"));
    ComboColor.colors.push(new ComboColor(0xffffffff, "White"));
    ComboColor.colors.push(new ComboColor(0xffffff00, "Yellow"));
  } else {
    // CSS3 standard color set
    ComboColor.colors.push(new ComboColor(0xfff0f8ff, "AliceBlue"));
    ComboColor.colors.push(new ComboColor(0xfffaebd7, "AntiqueWhite"));
    ComboColor.colors.push(new ComboColor(0xff00ffff, "Aqua"));
    ComboColor.colors.push(new ComboColor(0xff7fffd4, "Aquamarine"));
    ComboColor.colors.push(new ComboColor(0xfff0ffff, "Azure"));
    ComboColor.colors.push(new ComboColor(0xfff5f5dc, "Beige"));
    ComboColor.colors.push(new ComboColor(0xffffe4c4, "Bisque"));
    ComboColor.colors.push(new ComboColor(0xff000000, "Black"));
    ComboColor.colors.push(new ComboColor(0xffffebcd, "BlanchedAlmond"));
    ComboColor.colors.push(new ComboColor(0xff0000ff, "Blue"));
    ComboColor.colors.push(new ComboColor(0xff8a2be2, "BlueViolet"));
    ComboColor.colors.push(new ComboColor(0xffa52a2a, "Brown"));
    ComboColor.colors.push(new ComboColor(0xffdeb887, "BurlyWood"));
    ComboColor.colors.push(new ComboColor(0xff5f9ea0, "CadetBlue"));
    ComboColor.colors.push(new ComboColor(0xff7fff00, "Chartreuse"));
    ComboColor.colors.push(new ComboColor(0xffd2691e, "Chocolate"));
    ComboColor.colors.push(new ComboColor(0xffff7f50, "Coral"));
    ComboColor.colors.push(new ComboColor(0xff6495ed, "CornflowerBlue"));
    ComboColor.colors.push(new ComboColor(0xfffff8dc, "Cornsilk"));
    ComboColor.colors.push(new ComboColor(0xffdc143c, "Crimson"));
    ComboColor.colors.push(new ComboColor(0xff00ffff, "Cyan"));
    ComboColor.colors.push(new ComboColor(0xff00008b, "DarkBlue"));
    ComboColor.colors.push(new ComboColor(0xff008b8b, "DarkCyan"));
    ComboColor.colors.push(new ComboColor(0xffb8860b, "DarkGoldenRod"));
    ComboColor.colors.push(new ComboColor(0xffa9a9a9, "DarkGray"));
    ComboColor.colors.push(new ComboColor(0xff006400, "DarkGreen"));
    ComboColor.colors.push(new ComboColor(0xffbdb76b, "DarkKhaki"));
    ComboColor.colors.push(new ComboColor(0xff8b008b, "DarkMagenta"));
    ComboColor.colors.push(new ComboColor(0xff556b2f, "DarkOliveGreen"));
    ComboColor.colors.push(new ComboColor(0xffff8c00, "DarkOrange"));
    ComboColor.colors.push(new ComboColor(0xff9932cc, "DarkOrchid"));
    ComboColor.colors.push(new ComboColor(0xff8b0000, "DarkRed"));
    ComboColor.colors.push(new ComboColor(0xffe9967a, "DarkSalmon"));
    ComboColor.colors.push(new ComboColor(0xff8fbc8f, "DarkSeaGreen"));
    ComboColor.colors.push(new ComboColor(0xff483d8b, "DarkSlateBlue"));
    ComboColor.colors.push(new ComboColor(0xff2f4f4f, "DarkSlateGray"));
    ComboColor.colors.push(new ComboColor(0xff00ced1, "DarkTurquoise"));
    ComboColor.colors.push(new ComboColor(0xff9400d3, "DarkViolet"));
    ComboColor.colors.push(new ComboColor(0xffff1493, "DeepPink"));
    ComboColor.colors.push(new ComboColor(0xff00bfff, "DeepSkyBlue"));
    ComboColor.colors.push(new ComboColor(0xff696969, "DimGray"));
    ComboColor.colors.push(new ComboColor(0xff1e90ff, "DodgerBlue"));
    ComboColor.colors.push(new ComboColor(0xffd19275, "Feldspar"));
    ComboColor.colors.push(new ComboColor(0xffb22222, "FireBrick"));
    ComboColor.colors.push(new ComboColor(0xfffffaf0, "FloralWhite"));
    ComboColor.colors.push(new ComboColor(0xff228b22, "ForestGreen"));
    ComboColor.colors.push(new ComboColor(0xffff00ff, "Fuchsia"));
    ComboColor.colors.push(new ComboColor(0xffdcdcdc, "Gainsboro"));
    ComboColor.colors.push(new ComboColor(0xfff8f8ff, "GhostWhite"));
    ComboColor.colors.push(new ComboColor(0xffffd700, "Gold"));
    ComboColor.colors.push(new ComboColor(0xffdaa520, "GoldenRod"));
    ComboColor.colors.push(new ComboColor(0xff808080, "Gray"));
    ComboColor.colors.push(new ComboColor(0xff008000, "Green"));
    ComboColor.colors.push(new ComboColor(0xffadff2f, "GreenYellow"));
    ComboColor.colors.push(new ComboColor(0xfff0fff0, "HoneyDew"));
    ComboColor.colors.push(new ComboColor(0xffff69b4, "HotPink"));
    ComboColor.colors.push(new ComboColor(0xffcd5c5c, "IndianRed"));
    ComboColor.colors.push(new ComboColor(0xff4b0082, "Indigo"));
    ComboColor.colors.push(new ComboColor(0xfffffff0, "Ivory"));
    ComboColor.colors.push(new ComboColor(0xfff0e68c, "Khaki"));
    ComboColor.colors.push(new ComboColor(0xffe6e6fa, "Lavender"));
    ComboColor.colors.push(new ComboColor(0xfffff0f5, "LavenderBlush"));
    ComboColor.colors.push(new ComboColor(0xff7cfc00, "LawnGreen"));
    ComboColor.colors.push(new ComboColor(0xfffffacd, "LemonChiffon"));
    ComboColor.colors.push(new ComboColor(0xffadd8e6, "LightBlue"));
    ComboColor.colors.push(new ComboColor(0xfff08080, "LightCoral"));
    ComboColor.colors.push(new ComboColor(0xffe0ffff, "LightCyan"));
    ComboColor.colors.push(new ComboColor(0xfffafad2, "LightGoldenRodYellow"));
    ComboColor.colors.push(new ComboColor(0xffd3d3d3, "LightGray"));
    ComboColor.colors.push(new ComboColor(0xff90ee90, "LightGreen"));
    ComboColor.colors.push(new ComboColor(0xffffb6c1, "LightPink"));
    ComboColor.colors.push(new ComboColor(0xffffa07a, "LightSalmon"));
    ComboColor.colors.push(new ComboColor(0xff20b2aa, "LightSeaGreen"));
    ComboColor.colors.push(new ComboColor(0xff87cefa, "LightSkyBlue"));
    ComboColor.colors.push(new ComboColor(0xff8470ff, "LightSlateBlue"));
    ComboColor.colors.push(new ComboColor(0xff778899, "LightSlateGray"));
    ComboColor.colors.push(new ComboColor(0xffb0c4de, "LightSteelBlue"));
    ComboColor.colors.push(new ComboColor(0xffffffe0, "LightYellow"));
    ComboColor.colors.push(new ComboColor(0xff00ff00, "Lime"));
    ComboColor.colors.push(new ComboColor(0xff32cd32, "LimeGreen"));
    ComboColor.colors.push(new ComboColor(0xfffaf0e6, "Linen"));
    ComboColor.colors.push(new ComboColor(0xffff00ff, "Magenta"));
    ComboColor.colors.push(new ComboColor(0xff800000, "Maroon"));
    ComboColor.colors.push(new ComboColor(0xff66cdaa, "MediumAquaMarine"));
    ComboColor.colors.push(new ComboColor(0xff0000cd, "MediumBlue"));
    ComboColor.colors.push(new ComboColor(0xffba55d3, "MediumOrchid"));
    ComboColor.colors.push(new ComboColor(0xff9370d8, "MediumPurple"));
    ComboColor.colors.push(new ComboColor(0xff3cb371, "MediumSeaGreen"));
    ComboColor.colors.push(new ComboColor(0xff7b68ee, "MediumSlateBlue"));
    ComboColor.colors.push(new ComboColor(0xff00fa9a, "MediumSpringGreen"));
    ComboColor.colors.push(new ComboColor(0xff48d1cc, "MediumTurquoise"));
    ComboColor.colors.push(new ComboColor(0xffc71585, "MediumVioletRed"));
    ComboColor.colors.push(new ComboColor(0xff191970, "MidnightBlue"));
    ComboColor.colors.push(new ComboColor(0xfff5fffa, "MintCream"));
    ComboColor.colors.push(new ComboColor(0xffffe4e1, "MistyRose"));
    ComboColor.colors.push(new ComboColor(0xffffe4b5, "Moccasin"));
    ComboColor.colors.push(new ComboColor(0xffffdead, "NavajoWhite"));
    ComboColor.colors.push(new ComboColor(0xff000080, "Navy"));
    ComboColor.colors.push(new ComboColor(0xfffdf5e6, "OldLace"));
    ComboColor.colors.push(new ComboColor(0xff808000, "Olive"));
    ComboColor.colors.push(new ComboColor(0xff6b8e23, "OliveDrab"));
    ComboColor.colors.push(new ComboColor(0xffffa500, "Orange"));
    ComboColor.colors.push(new ComboColor(0xffff4500, "OrangeRed"));
    ComboColor.colors.push(new ComboColor(0xffda70d6, "Orchid"));
    ComboColor.colors.push(new ComboColor(0xffeee8aa, "PaleGoldenRod"));
    ComboColor.colors.push(new ComboColor(0xff98fb98, "PaleGreen"));
    ComboColor.colors.push(new ComboColor(0xffafeeee, "PaleTurquoise"));
    ComboColor.colors.push(new ComboColor(0xffd87093, "PaleVioletRed"));
    ComboColor.colors.push(new ComboColor(0xffffefd5, "PapayaWhip"));
    ComboColor.colors.push(new ComboColor(0xffffdab9, "PeachPuff"));
    ComboColor.colors.push(new ComboColor(0xffcd853f, "Peru"));
    ComboColor.colors.push(new ComboColor(0xffffc0cb, "Pink"));
    ComboColor.colors.push(new ComboColor(0xffdda0dd, "Plum"));
    ComboColor.colors.push(new ComboColor(0xffb0e0e6, "PowderBlue"));
    ComboColor.colors.push(new ComboColor(0xff800080, "Purple"));
    ComboColor.colors.push(new ComboColor(0xffff0000, "Red"));
    ComboColor.colors.push(new ComboColor(0xffbc8f8f, "RosyBrown"));
    ComboColor.colors.push(new ComboColor(0xff4169e1, "RoyalBlue"));
    ComboColor.colors.push(new ComboColor(0xff8b4513, "SaddleBrown"));
    ComboColor.colors.push(new ComboColor(0xfffa8072, "Salmon"));
    ComboColor.colors.push(new ComboColor(0xfff4a460, "SandyBrown"));
    ComboColor.colors.push(new ComboColor(0xff2e8b57, "SeaGreen"));
    ComboColor.colors.push(new ComboColor(0xfffff5ee, "SeaShell"));
    ComboColor.colors.push(new ComboColor(0xffa0522d, "Sienna"));
    ComboColor.colors.push(new ComboColor(0xffc0c0c0, "Silver"));
    ComboColor.colors.push(new ComboColor(0xff87ceeb, "SkyBlue"));
    ComboColor.colors.push(new ComboColor(0xff6a5acd, "SlateBlue"));
    ComboColor.colors.push(new ComboColor(0xff708090, "SlateGray"));
    ComboColor.colors.push(new ComboColor(0xfffffafa, "Snow"));
    ComboColor.colors.push(new ComboColor(0xff00ff7f, "SpringGreen"));
    ComboColor.colors.push(new ComboColor(0xff4682b4, "SteelBlue"));
    ComboColor.colors.push(new ComboColor(0xffd2b48c, "Tan"));
    ComboColor.colors.push(new ComboColor(0xff008080, "Teal"));
    ComboColor.colors.push(new ComboColor(0xffd8bfd8, "Thistle"));
    ComboColor.colors.push(new ComboColor(0xffff6347, "Tomato"));
    ComboColor.colors.push(new ComboColor(0xff40e0d0, "Turquoise"));
    ComboColor.colors.push(new ComboColor(0xffee82ee, "Violet"));
    ComboColor.colors.push(new ComboColor(0xffd02090, "VioletRed"));
    ComboColor.colors.push(new ComboColor(0xfff5deb3, "Wheat"));
    ComboColor.colors.push(new ComboColor(0xffffffff, "White"));
    ComboColor.colors.push(new ComboColor(0xfff5f5f5, "WhiteSmoke"));
    ComboColor.colors.push(new ComboColor(0xffffff00, "Yellow"));
    ComboColor.colors.push(new ComboColor(0xff9acd32, "YellowGreen"));
  }
  // Sort colors by hue
  ComboColor.colors.sort((a, b) =>
    a.isEqualTo(b) ? 0 : a.isLessThan(b) ? -1 : +1
  );
};

ComboColor.searchColor = function (rgba) {
  let n = ComboColor.colors.length;
  for (let v = new ComboColor(rgba), i = 0, j = n; ; ) {
    if (j <= i) return i < n && v.isEqualTo(ComboColor.colors[i]) ? i : -1;
    let m = (i + j) >> 1;
    if (ComboColor.colors[m].isLessThan(v)) i = m + 1;
    else j = m;
  }
};

// ----------------------------------------------------------------------------

/*
 * ColorComboBox
 *
 * A utility class that provides a simple list with the full set of standard
 * CSS3 colors. This includes 143 ComboBox items that are automatically shared
 * by all existing ColorComboBox objects. Thanks to this implicit sharing
 * mechanism, a script can define a large number of ColorComboBox controls
 * without consuming too much resources on any supported platform.
 *
 * The list of items corresponding to CSS3 colors is sorted by hue value (in
 * the HSV or HSI color ordering systems). This makes it much easier the task
 * of selecting colors, since similar hues are grouped visually.
 *
 * In addition to standard CSS3 colors, a single custom color item can be
 * defined for each ColorComboBox object. The custom color item is managed
 * automatically by the object and appended after the list of standard items.
 */
export function ColorComboBox(parent) {
  this.__base__ = ComboBox;
  if (parent) this.__base__(parent);
  else this.__base__();

  this.customRGBA = null;
  this.onCurrentColorChanged = null;
  this.onColorSelected = null;

  if (!ComboColor.isInitialized()) ComboColor.initColors();

  let iconSize = this.logicalPixelsToPhysical(ICONSIZE);
  let iconMargin = this.logicalPixelsToPhysical(ICONMARGIN);
  for (let i = 0; i < ComboColor.colors.length; ++i)
    this.addItem(
      ComboColor.colors[i].title(),
      ComboColor.colors[i].icon(iconSize, iconMargin)
    );

  this.setMinWidth(
    this.font.width("Custom (255,255,255)") + this.logicalPixelsToPhysical(60)
  );

  this.colorForIndex = function (index) {
    return index < ComboColor.colors.length
      ? ComboColor.colors[index].value
      : this.customRGBA;
  };

  this.currentColor = function () {
    return this.colorForIndex(this.currentItem);
  };

  this.setCurrentColor = function (rgba) {
    this.canUpdate = false;

    rgba |= 0xff000000; // we only deal with opaque colors

    let i = ComboColor.searchColor(rgba);
    if (i < 0) {
      if (rgba != this.customRGBA) {
        if (this.numberOfItems > ComboColor.colors.length)
          this.removeItem(this.numberOfItems - 1);
        this.customRGBA = rgba;
        let item = new ComboColor(
          rgba,
          format(
            "Custom (%3d,%3d,%3d)",
            Color.red(rgba),
            Color.green(rgba),
            Color.blue(rgba)
          )
        );
        let iconSize = this.logicalPixelsToPhysical(ICONSIZE);
        let iconMargin = this.logicalPixelsToPhysical(ICONMARGIN);
        this.addItem(item.title(), item.icon(iconSize, iconMargin));
      }

      i = this.numberOfItems - 1;
    }

    this.currentItem = i;

    this.canUpdate = true;
  };

  this.onItemHighlighted = function (index) {
    let rgba = this.colorForIndex(index);
    if (this.onCurrentColorChanged) this.onCurrentColorChanged(rgba);
  };

  this.onItemSelected = function (index) {
    if (this.onColorSelected) this.onColorSelected(this.colorForIndex(index));
  };
}

ColorComboBox.prototype = new ComboBox();

// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// EOF pjsr/ColorComboBox.jsh - Released 2020-12-12T20:55:24Z
