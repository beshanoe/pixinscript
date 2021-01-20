//     ____       __ _____  ____
//    / __ \     / // ___/ / __ \
//   / /_/ /__  / / \__ \ / /_/ /
//  / ____// /_/ / ___/ // _, _/   PixInsight JavaScript Runtime
// /_/     \____/ /____//_/ |_|    PJSR Version 1.0
// ----------------------------------------------------------------------------
// pjsr/QuadTreeNode.jsh - Released 2020-12-12T20:55:24Z
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

#ifndef __PJSR_QuadTreeNode_jsh
#define __PJSR_QuadTreeNode_jsh

/*
 * Quadtree node structure.
 */
function QuadTreeNode( rect, index )
{
   this.__base__ = Object;
   this.__base__();

   /*
    * The rectangular region represented by this node.
    */
   this.rect = rect ? rect : { x0: 0, y0: 0, x1: 0, y1: 0 };

   /*
    * Child nodes
    */
   this.nw = null; // North-West child node, representing the top-left subregion.
   this.ne = null; // North-East child node, representing the top-right subregion.
   this.sw = null; // South-West child node, representing the bottom-left subregion.
   this.se = null; // South-East child node, representing the bottom-right subregion.

   /*
    * The index of the objects represented by this node.
    */
   this.index = index ? index : [];

   /*
    * Returns true iff this is a leaf quadtree node. A leaf node does not
    * contain child nodes, that is, there is no further subdivision of the
    * domain space beyond a leaf quadtree node.
    *
    * In a healthy quadtree (as any QuadTree structure should be under normal
    * working conditions), you can expect any leaf node to contain a nonempty
    * object index.
    */
   this.isLeaf = function()
   {
      return this.nw == null && this.ne == null && this.sw == null && this.se == null;
   };

   /*
    * Returns true iff the rectangular region represented by this node
    * intersects the specified rectangle 'r'.
    */
   this.intersects = function( r )
   {
      return r.x1 >= this.rect.x0 && r.x0 <= this.rect.x1 &&
             r.y1 >= this.rect.y0 && r.y0 <= this.rect.y1;
   };

   /*
    * Returns true iff the rectangular region represented by this node
    * includes the specified point 'p' in the plane.
    */
   this.includes = function( p )
   {
      return p.x >= this.rect.x0 && p.x <= this.rect.x1 &&
             p.y >= this.rect.y0 && p.y <= this.rect.y1;
   };

   /*
    * Returns the Northwest (top left) splitting rectangle for this node.
    */
   this.nwRect = function()
   {
      return { x0: this.rect.x0,
               y0: this.rect.y0,
               x1: (this.rect.x0 + this.rect.x1)/2,
               y1: (this.rect.y0 + this.rect.y1)/2 };
   };

   /*
    * Returns the Northeast (top right) splitting rectangle for this node.
    */
   this.neRect = function()
   {
      return { x0: (this.rect.x0 + this.rect.x1)/2,
               y0: this.rect.y0,
               x1: this.rect.x1,
               y1: (this.rect.y0 + this.rect.y1)/2 };
   };

   /*
    * Returns the Southwest (bottom left) splitting rectangle for this node.
    */
   this.swRect = function()
   {
      return { x0: this.rect.x0,
               y0: (this.rect.y0 + this.rect.y1)/2,
               x1: (this.rect.x0 + this.rect.x1)/2,
               y1: this.rect.y1 };
   };

   /*
    * Returns the Southeast (bottom right) splitting rectangle for this
    * node.
    */
   this.seRect = function()
   {
      return { x0: (this.rect.x0 + this.rect.x1)/2,
               y0: (this.rect.y0 + this.rect.y1)/2,
               x1: this.rect.x1,
               y1: this.rect.y1 };
   };
}

QuadTreeNode.prototype = new Object;

#endif   // __PJSR_QuadTreeNode_jsh

// ----------------------------------------------------------------------------
// EOF pjsr/QuadTreeNode.jsh - Released 2020-12-12T20:55:24Z
