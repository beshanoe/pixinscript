//     ____       __ _____  ____
//    / __ \     / // ___/ / __ \
//   / /_/ /__  / / \__ \ / /_/ /
//  / ____// /_/ / ___/ // _, _/   PixInsight JavaScript Runtime
// /_/     \____/ /____//_/ |_|    PJSR Version 1.0
// ----------------------------------------------------------------------------
// pjsr/BRQuadTree.jsh - Released 2020-12-12T20:55:24Z
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

#ifndef __PJSR_BRQuadTree_jsh
#define __PJSR_BRQuadTree_jsh

#include <pjsr/QuadTreeNode.jsh>

/*
 * Bucket rectangle quadtree.
 *
 * A quadtree (Ref. 1) is a specialized binary search tree for partitioning of
 * a set of two-dimensional objects in two dimensions. Quadtrees have important
 * applications in computational geometry problems requiring efficient
 * rectangular range searching and nearest neighbor queries. This object
 * implements a bucket rectangle quadtree structure (Ref. 2).
 *
 * Let o be any object stored in a BRQuadTree structure. There must exist an
 * o.rect property which stores the coordinates of the rectangular region
 * associated with o. The following numeric properties must be defined:
 *
 * o.rect.x0    Left coordinate.
 * o.rect.y0    Top coordinate.
 * o.rect.x1    Right coordinate.
 * o.rect.y1    Bottom coordinate.
 *
 * where the following constraints must be observed by every object stored in
 * a BRQuadTree structure:
 *
 * o.rect.x0 <= o.rect.x1
 * o.rect.y0 <= o.rect.y1
 *
 * References:
 *
 * 1. Mark de Berg et al, Computational Geometry: Algorithms and Applications
 *    Third Edition, Springer, 2010, Chapter 14.
 *
 * 2. Hanan Samet, Foundations of Multidimensional and Metric Data Structures,
 *    Morgan Kaufmann, 2006, Section 3.4.
 */
function BRQuadTree( objects, bucketCapacity )
{
   this.__base__ = Object;
   this.__base__();

   /*
    * Private data and functions.
    */

   function newRect( x0, y0, x1, y1 )
   {
      return { x0: x0, y0: y0, x1: x1, y1: y1 };
   }

   function orderedRect( r )
   {
      return newRect( Math.min( r.x0, r.x1 ),
                      Math.min( r.y0, r.y1 ),
                      Math.max( r.x0, r.x1 ),
                      Math.max( r.y0, r.y1 ) );
   }

   function intersects( r1, r2 )
   {
      return r2.x1 >= r1.x0 && r2.x0 <= r1.x1 &&
             r2.y1 >= r1.y0 && r2.y0 <= r1.y1;
   }

   function includes( r, p )
   {
      return p.x >= r.x0 && p.x <= r.x1 &&
             p.y >= r.y0 && p.y <= r.y1;
   }

   this.buildTree = function( rect, index )
   {
      if ( index.length == 0 )
         return null;

      if ( index.length <= this.bucketCapacity )
         return new QuadTreeNode( rect, index );

      let x2 = (rect.x0 + rect.x1)/2;
      let y2 = (rect.y0 + rect.y1)/2;
      // Prevent geometrically degenerate subtrees. For safety, we enforce
      // minimum region dimensions larger than twice the machine epsilon for
      // the rectangle coordinate type.
      if ( x2 - rect.x0 < 2*Math.EPSILON || rect.x1 - x2 < 2*Math.EPSILON ||
           y2 - rect.y0 < 2*Math.EPSILON || rect.y1 - y2 < 2*Math.EPSILON )
      {
         return new QuadTreeNode( rect, index );
      }

      let nwRect = newRect( rect.x0, rect.y0, x2,      y2 );
      let neRect = newRect( x2,      rect.y0, rect.x1, y2 );
      let swRect = newRect( rect.x0, y2,      x2,      rect.y1 );
      let seRect = newRect( x2,      y2,      rect.x1, rect.y1 );
      let nw = [], ne = [], sw = [], se = [];
      for ( let i = 0; i < index.length; ++i )
      {
         let x = index[i];
         let o = this.objects[x];
         if ( o != null )
         {
            if ( intersects( nwRect, o.rect ) )
               nw.push( x );
            if ( intersects( neRect, o.rect ) )
               ne.push( x );
            if ( intersects( swRect, o.rect ) )
               sw.push( x );
            if ( intersects( seRect, o.rect ) )
               se.push( x );
         }
      }

      let node = new QuadTreeNode( rect );
      node.nw = this.buildTree( nwRect, nw );
      node.ne = this.buildTree( neRect, ne );
      node.sw = this.buildTree( swRect, sw );
      node.se = this.buildTree( seRect, se );

      // Further degeneracies may result, e.g. if the contained objects are not
      // behaving as expected. Do not allow them.
      if ( node.isLeaf() )
         return new QuadTreeNode( rect, index );

      return node;
   };

   this.insertTree = function( x, node )
   {
      let object = this.objects[x];

      if ( object.rect.x0 < node.rect.x0 )
         node.rect.x0 = object.rect.x0;
      else if ( object.rect.x1 > node.rect.x1 )
         node.rect.x1 = object.rect.x1;

      if ( object.rect.y0 < node.rect.y0 )
         node.rect.y0 = object.rect.y0;
      else if ( object.rect.y1 > node.rect.y1 )
         node.rect.y1 = object.rect.y1;

      if ( node.isLeaf() )
      {
         if ( node.index.length < this.bucketCapacity )
            node.index.push( x );
         else
         {
            let rect = node.rect;
            let x2 = (rect.x0 + rect.x1)/2;
            let y2 = (rect.y0 + rect.y1)/2;
            // Prevent geometrically degenerate subtrees. For safety, we
            // enforce minimum region dimensions larger than twice the machine
            // epsilon for the rectangle coordinate type.
            if ( x2 - rect.x0 < 2*Math.EPSILON || rect.x1 - x2 < 2*Math.EPSILON ||
                 y2 - rect.y0 < 2*Math.EPSILON || rect.y1 - y2 < 2*Math.EPSILON )
            {
               node.index.push( x );
            }
            else
            {
               let nwRect = newRect( rect.x0, rect.y0, x2, y2 );
               let neRect = newRect( x2, rect.y0, rect.x1, y2 );
               let swRect = newRect( rect.x0, y2, x2, rect.y1 );
               let seRect = newRect( x2, y2, rect.x1, rect.y1 );
               let nw = [], ne = [], sw = [], se = [];
               for ( let i = 0; i < node.index.length; ++i )
               {
                  let x = node.index[i];
                  let o = this.objects[x];
                  if ( o != null )
                  {
                     if ( intersects( nwRect, o.rect ) )
                        nw.push( x );
                     if ( intersects( neRect, o.rect ) )
                        ne.push( x );
                     if ( intersects( swRect, o.rect ) )
                        sw.push( x );
                     if ( intersects( seRect, o.rect ) )
                        se.push( x );
                  }
               }

               if ( intersects( nwRect, object.rect ) )
                  nw.push( x );
               if ( intersects( neRect, object.rect ) )
                  ne.push( x );
               if ( intersects( swRect, object.rect ) )
                  sw.push( x );
               if ( intersects( seRect, object.rect ) )
                  se.push( x );

               node.index = []; // mutate leaf node to structural node

               if ( nw.length > 0 )
                  node.nw = new QuadTreeNode( newRect( rect.x0, rect.y0,      x2,      y2 ), nw );
               if ( ne.length > 0 )
                  node.ne = new QuadTreeNode( newRect(      x2, rect.y0, rect.x1,      y2 ), ne );
               if ( sw.length > 0 )
                  node.sw = new QuadTreeNode( newRect( rect.x0,      y2,      x2, rect.y1 ), sw );
               if ( se.length > 0 )
                  node.se = new QuadTreeNode( newRect(      x2,      y2, rect.x1, rect.y1 ), se );
            }
         }
      }
      else
      {
         let rect = node.rect;
         let x2 = (rect.x0 + rect.x1)/2;
         let y2 = (rect.y0 + rect.y1)/2;
         let nwRect = newRect( rect.x0, rect.y0, x2, y2 );
         let neRect = newRect( x2, rect.y0, rect.x1, y2 );
         let swRect = newRect( rect.x0, y2, x2, rect.y1 );
         let seRect = newRect( x2, y2, rect.x1, rect.y1 );

         if ( intersects( nwRect, object.rect ) )
         {
            if ( node.nw == null )
               node.nw = new QuadTreeNode( nwRect );
            this.insertTree( x, node.nw );
         }
         if ( intersects( neRect, object.rect ) )
         {
            if ( node.ne == null )
               node.ne = new QuadTreeNode( neRect );
            this.insertTree( x, node.ne );
         }
         if ( intersects( swRect, object.rect ) )
         {
            if ( node.sw == null )
               node.sw = new QuadTreeNode( swRect );
            this.insertTree( x, node.sw );
         }
         if ( intersects( seRect, object.rect ) )
         {
            if ( node.se == null )
               node.se = new QuadTreeNode( seRect );
            this.insertTree( x, node.se );
         }
      }
   };

   this.removeTree = function( x, node )
   {
      if ( node != null )
      {
         if ( node.intersects( this.objects[x].rect ) )
            if ( node.isLeaf() )
            {
               let index = [];
               for ( let i = 0; i < node.index.length; ++i )
               {
                  let ix = node.index[i];
                  if ( ix != x )
                     index.push( ix );
               }

               if ( index.length == 0 )
                  return true; // caller must remove node

               node.index = index;
            }
            else
            {
               if ( this.removeTree( x, node.nw ) )
                  node.nw = null;
               if ( this.removeTree( x, node.ne ) )
                  node.ne = null;
               if ( this.removeTree( x, node.sw ) )
                  node.sw = null;
               if ( this.removeTree( x, node.se ) )
                  node.se = null;

               if ( node.isLeaf() )
                  return true; // caller must remove node
            }
      }

      return false; // caller must preserve node
   };

   this.removeTreeAtPoint = function( p, node )
   {
      if ( node != null )
      {
         if ( node.includes( p ) )
            if ( node.isLeaf() )
            {
               let index = [];
               for ( let i = 0; i < node.index.length; ++i )
               {
                  let x = node.index[i];
                  let o = this.objects[x];
                  if ( o != null )
                     if ( !includes( o.rect, p ) )
                        index.push( x );
               }

               if ( index.length == 0 )
                  return true; // caller must remove node

               node.index = index;
            }
            else
            {
               if ( this.removeTreeAtPoint( p, node.nw ) )
                  node.nw = null;
               if ( this.removeTreeAtPoint( p, node.ne ) )
                  node.ne = null;
               if ( this.removeTreeAtPoint( p, node.sw ) )
                  node.sw = null;
               if ( this.removeTreeAtPoint( p, node.se ) )
                  node.se = null;

               if ( node.isLeaf() )
                  return true; // caller must remove node
            }
      }

      return false; // caller must preserve node
   };

   this.removeTreeAtRect = function( rect, node )
   {
      if ( node != null )
         if ( node.intersects( rect ) )
         {
            if ( node.isLeaf() )
            {
               let index = [];
               for ( let i = 0; i < node.index.length; ++i )
               {
                  let x = node.index[i];
                  let o = this.objects[x];
                  if ( o != null )
                     if ( !intersects( rect, o.rect ) )
                        index.push( x );
               }

               if ( index.length == 0 )
                  return true; // caller must remove node

               node.index = index;
            }
            else
            {
               if ( this.removeTreeAtRect( rect, node.nw ) )
                  node.nw = null;
               if ( this.removeTreeAtRect( rect, node.ne ) )
                  node.ne = null;
               if ( this.removeTreeAtRect( rect, node.sw ) )
                  node.sw = null;
               if ( this.removeTreeAtRect( rect, node.se ) )
                  node.se = null;

               if ( node.isLeaf() )
                  return true; // caller must remove node
            }
         }

      return false; // caller must preserve node
   };

   function clearTree( node )
   {
      if ( node != null )
      {
         clearTree( node.nw );
         node.nw = null;
         clearTree( node.ne );
         node.ne = null;
         clearTree( node.sw );
         node.sw = null;
         clearTree( node.se );
         node.se = null;
      }
   }

   function searchLeafNode( point, node )
   {
      if ( node != null )
         if ( node.includes( point ) )
         {
            if ( node.isLeaf() )
               return node;

            let child = searchLeafNode( point, node.nw );
            if ( child == null )
            {
               child = searchLeafNode( point, node.ne );
               if ( child == null )
               {
                  child = searchLeafNode( point, node.sw );
                  if ( child == null )
                     child = searchLeafNode( point, node.se );
               }
            }
            return child;
         }

      return null;
   }

   function searchNode( point, node )
   {
      if ( node != null )
         if ( node.includes( point ) )
         {
            if ( node.isLeaf() )
               return node;

            let child = searchNode( point, node.nw );
            if ( child == null )
            {
               child = searchNode( point, node.ne );
               if ( child == null )
               {
                  child = searchNode( point, node.sw );
                  if ( child == null )
                  {
                     child = searchNode( point, node.se );
                     if ( child == null )
                        return node;
                  }
               }
            }
            return child;
         }

      return null;
   }

   this.searchTree = function( found, rect, node )
   {
      if ( node != null )
         if ( node.intersects( rect ) )
            if ( node.isLeaf() )
            {
               for ( let i = 0; i < node.index.length; ++i )
               {
                  let x = node.index[i];
                  let o = this.objects[x];
                  if ( o != null )
                     if ( intersects( rect, o.rect ) )
                        found.push( x );
               }
            }
            else
            {
               this.searchTree( found, rect, node.nw );
               this.searchTree( found, rect, node.ne );
               this.searchTree( found, rect, node.sw );
               this.searchTree( found, rect, node.se );
            }
   };

   this.minDistTree = function( r, rect, includeRect, excludeRect, node )
   {
      if ( r.dist2 > 0 )
         if ( node != null )
            if ( node.intersects( includeRect ) )
               if ( node.isLeaf() )
               {
                  for ( let i = 0; i < node.index.length; ++i )
                  {
                     let x = node.index[i];
                     let o = this.objects[x];
                     if ( o != null )
                        if ( intersects( includeRect, o.rect ) )
                           if ( !excludeRect || !intersects( excludeRect, o.rect ) )
                           {
                              let dx = (o.rect.x1 < rect.x0) ? rect.x0 - o.rect.x1 : ((rect.x1 < o.rect.x0) ? o.rect.x0 - rect.x1 : 0);
                              let dy = (o.rect.y1 < rect.y0) ? rect.y0 - o.rect.y1 : ((rect.y1 < o.rect.y0) ? o.rect.y0 - rect.y1 : 0);
                              let d2 = dx*dx + dy*dy;
                              if ( d2 < r.dist2 )
                                 r.dist2 = d2;
                           }
                  }
               }
               else
               {
                  this.minDistTree( r, rect, includeRect, excludeRect, node.nw );
                  this.minDistTree( r, rect, includeRect, excludeRect, node.ne );
                  this.minDistTree( r, rect, includeRect, excludeRect, node.sw );
                  this.minDistTree( r, rect, includeRect, excludeRect, node.se );
               }
   };

   this.sumDistTree = function( r, rect, includeRect, excludeRect, node )
   {
      if ( node != null )
         if ( node.intersects( includeRect ) )
            if ( node.isLeaf() )
            {
               for ( let i = 0; i < node.index.length; ++i )
               {
                  let x = node.index[i];
                  let o = this.objects[x];
                  if ( o != null )
                     if ( intersects( includeRect, o.rect ) )
                        if ( !excludeRect || !intersects( excludeRect, o.rect ) )
                        {
                           let dx = (o.rect.x1 < rect.x0) ? rect.x0 - o.rect.x1 : ((rect.x1 < o.rect.x0) ? o.rect.x0 - rect.x1 : 0);
                           let dy = (o.rect.y1 < rect.y0) ? rect.y0 - o.rect.y1 : ((rect.y1 < o.rect.y0) ? o.rect.y0 - rect.y1 : 0);
                           r.sdist2 += dx*dx + dy*dy;
                           r.count++;
                        }
               }
            }
            else
            {
               this.sumDistTree( r, rect, includeRect, excludeRect, node.nw );
               this.sumDistTree( r, rect, includeRect, excludeRect, node.ne );
               this.sumDistTree( r, rect, includeRect, excludeRect, node.sw );
               this.sumDistTree( r, rect, includeRect, excludeRect, node.se );
            }
   };

   this.searchTreeWithCallback = function( rect, callback, data, node )
   {
      if ( node != null )
         if ( node.intersects( rect ) )
            if ( node.isLeaf() )
            {
               for ( let i = 0; i < node.index.length; ++i )
               {
                  let x = node.index[i];
                  let o = this.objects[x];
                     if ( o != null )
                        if ( intersects( rect, o.rect ) )
                           callback( x, data );
               }
            }
            else
            {
               this.searchTreeWithCallback( rect, callback, data, node.nw );
               this.searchTreeWithCallback( rect, callback, data, node.ne );
               this.searchTreeWithCallback( rect, callback, data, node.sw );
               this.searchTreeWithCallback( rect, callback, data, node.se );
            }
   };

   function traverseTree( node, func )
   {
      if ( node != null )
         if ( node.isLeaf() )
            func( node );
         else
         {
            traverseTree( node.nw, func );
            traverseTree( node.ne, func );
            traverseTree( node.sw, func );
            traverseTree( node.se, func );
         }
   }

   function visitAllNodes( node, func )
   {
      if ( node != null )
      {
         func( node );
         visitAllNodes( node.nw, func );
         visitAllNodes( node.ne, func );
         visitAllNodes( node.sw, func );
         visitAllNodes( node.se, func );
      }
   }

   function treeHeight( node, h )
   {
      if ( node == null )
         return h;
      return h + 1 + Math.max( treeHeight( node.nw, h ),
                               treeHeight( node.ne, h ),
                               treeHeight( node.sw, h ),
                               treeHeight( node.se, h ) );
   }

   // -------------------------------------------------------------------------
   // Public interface.
   // -------------------------------------------------------------------------

   /*
    * Builds a new quadtree for the specified list of objects.
    *
    * objects           Array of objects that will be stored in this quadtree.
    *
    * bucketCapacity    The maximum number of objects allowed in a leaf
    *                   quadtree node. If specified and not undefined, must
    *                   be >= 1. The default value is 16.
    *
    * rect              If specified and not undefined, this is the prescribed
    *                   rectangular search region. Otherwise the search region
    *                   will be computed automatically.
    *
    * If the tree already stores objects before calling this function, they are
    * removed before building a new tree.
    *
    * If the specified list of objects is empty, this method yields an empty
    * quadtree.
    */
   this.build = function( objects, bucketCapacity, rect )
   {
      this.clear();

      if ( objects !== undefined && objects.length > 0 )
      {
         this.objects = objects;

         if ( bucketCapacity !== undefined )
            this.bucketCapacity = Math.max( 1, bucketCapacity );

         if ( rect !== undefined )
            rect = orderedRect( rect );
         else
         {
            rect = newRect( this.objects[0].rect.x0, this.objects[0].rect.y0,
                            this.objects[0].rect.x1, this.objects[0].rect.y1 );
            for ( let i = 1; i < this.objects.length; ++i )
            {
               let o = this.objects[i];
               if ( o.rect.x0 < rect.x0 )
                  rect.x0 = o.rect.x0;
               if ( o.rect.y0 < rect.y0 )
                  rect.y0 = o.rect.y0;
               if ( o.rect.x1 > rect.x1 )
                  rect.x1 = o.rect.x1;
               if ( o.rect.y1 > rect.y1 )
                  rect.y1 = o.rect.y1;
            }
         }

         let index = new Array( this.objects.length );
         for ( let i = 0; i < this.objects.length; ++i )
            index[i] = i;
         this.root = this.buildTree( rect, index );
      }
   };

   /*
    * Inserts a reference to the specified object in this quadtree.
    */
   this.insert = function( object )
   {
      let i = this.objects.length;
      this.objects.push( object );
      if ( this.root == null )
         this.root = new QuadTreeNode;
      this.insertTree( i, this.root );
   };

   /*
    * Removes all existing references to the specified object in this quadtree.
    */
   this.remove = function( object )
   {
      if ( object )
         for ( let i = 0; i < this.objects.length; ++i )
            if ( this.objects[i] == object )
            {
               if ( this.removeTree( i, this.root ) )
                  this.root = null;
               this.objects[i] = null;
            }
   };

   /*
    * Removes all objects whose associated rectangular regions include the
    * specified point.
    */
   this.removeAtPoint = function( point )
   {
      if ( this.removeTreeAtPoint( point, this.root ) )
         this.root = null;
   };

   /*
    * Removes all objects whose associated rectangular regions intersect the
    * specified region.
    */
   this.removeAtRect = function( rect )
   {
      if ( this.removeTreeAtRect( orderedRect( rect ), this.root ) )
         this.root = null;
   };

   /*
    * Regenerates the quadtree structure without null object references.
    *
    * Calling this function is useful to optimize the quadtree after a
    * significant amount of object deletions.
    */
   this.regenerate = function( bucketCapacity, rect )
   {
      let objects = [];
      for ( let i = 0; i < this.objects.length; ++i )
         if ( this.objects[i] != null )
            objects.push( this.objects[i] );
      this.build( objects, bucketCapacity, rect );
   };

   /*
    * Removes all stored objects, as well as the tree structure, yielding an
    * empty quadtree.
    */
   this.clear = function()
   {
      clearTree( this.root );
      this.root = null;
      this.objects = [];
   };

   /*
    * Performs a rectangular range search in this quadtree.
    *
    * rect     The rectangular search region.
    *
    * Returns a (possibly empty) array with the index of all objects found in
    * this tree within the specified search region.
    *
    * Let A be the array returned by this function. Then the set of objects
    * found within the specified rectangular region is given by:
    *
    * this.objects[A[0]], this.objects[A[1]], ..., this.objects[A.length-1]
    */
   this.search = function( rect )
   {
      let index = [];
      this.searchTree( index, orderedRect( rect ), this.root );
      return index;
   };

   /*
    * Performs a rectangular range search in this quadtree, enumerating all
    * objects found with a callback function.
    *
    * rect       The rectangular search region.
    *
    * callback   Callback function.
    *
    * data       Callback data (optional, undefined by default).
    *
    * The callback function prototype should be:
    *
    * void callback( object, data )
    *
    * The callback function will be called once for each object found in the
    * tree within the specified search region.
    */
   this.searchWithCallback = function( rect, callback, data )
   {
      this.searchTreeWithCallback( orderedRect( rect ), callback, data, this.root );
   };

   /*
    * Performs a recursive tree traversal.
    *
    * The specified function should be of the form:
    *
    * void func( node )
    *
    * The function will be called for each leaf node in this quadtree.
    */
   this.traverse = function( func )
   {
      traverseTree( this.root, func );
   };

   /*
    * Returns the tree node (either leaf or structural) intersecting the
    * specified point, or null if no such node exists in this quadtree.
    */
   this.nodeAt = function( point )
   {
      return searchNode( point, this.root );
   };

   /*
    * Returns the leaf node intersecting the specified point, or null if no
    * such leaf node exists in this quadtree.
    */
   this.leafNodeAt = function( point )
   {
      return searchLeafNode( point, this.root );
   };

   /*
    * Returns the minimum distance between the specified rectangle and the
    * rectangles associated with all objects found at a prescribed maximum
    * distance.
    *
    * This function computes the minimum distance exclusively for all objects
    * in this quadtree intersecting the search rectangle:
    *
    * { x0: rect.x0 - dx, y0: rect.y0 - dy,
    *   x1: rect.x1 + dx, y1: rect.y1 + dy }
    *
    * If excludeRect is specified and not undefined, any object intersecting it
    * will also be ignored.
    *
    * If there are no objects intersecting the search rectangle, or if at least
    * one object intersects the search rectangle, the return value is zero.
    */
   this.minDist = function( rect, dx, dy, excludeRect )
   {
      let r = { dist2: Math.MAX };
      this.minDistTree( r, rect, { x0: rect.x0 - dx, y0: rect.y0 - dy,
                                   x1: rect.x1 + dx, y1: rect.y1 + dy }, excludeRect, this.root );
      return Math.sqrt( r.dist2 );
   };

   /*
    * Returns the average distance between the specified rectangle and and the
    * rectangles associated with all objects found at a prescribed maximum
    * distance.
    *
    * This function computes the average distance exclusively for all objects
    * in this quadtree intersecting the search rectangle:
    *
    * { x0: rect.x0 - dx, y0: rect.y0 - dy,
    *   x1: rect.x1 + dx, y1: rect.y1 + dy }
    *
    * If excludeRect is specified and not undefined, any object intersecting it
    * will also be ignored.
    *
    * If there are no objects intersecting the search rectangle, the return
    * value is zero.
    */
   this.avgDist = function( rect, dx, dy, excludeRect )
   {
      let r = { sdist2: 0, count: 0 };
      this.sumDistTree( r, rect, { x0: rect.x0 - dx, y0: rect.y0 - dy,
                                   x1: rect.x1 + dx, y1: rect.y1 + dy }, excludeRect, this.root );
      return (r.count > 0) ? Math.sqrt( r.sdist2/r.count ) : 0;
   };

   /*
    * Returns true iff this object represents a valid quadtree structure. The
    * returned value is true if the quadtree has at least a non-null root node.
    */
   this.isTree = function()
   {
      return this.root != null;
   };

   /*
    * Returns true iff this quadtree does not reference any objects.
    */
   this.isEmpty = function()
   {
      return this.objects.length == 0;
   };

   /*
    * Returns the total number of leaf nodes in this quadtree.
    */
   this.numberOfLeafNodes = function()
   {
      let n = 0;
      this.traverse( ( node ) => { ++n; } );
      return n;
   };

   /*
    * Returns the total number of nodes in this quadtree.
    */
   this.numberOfNodes = function()
   {
      let n = 0;
      visitAllNodes( this.root, ( node ) => { ++n; } );
      return n;
   };

   /*
    * Returns the height of this quadtree, or the maximum distance in nodes
    * from the root node to a leaf node.
    */
   this.height = function()
   {
      return treeHeight( this.root, 0 );
   };

   /*
    * The root node of this quadtree.
    */
   this.root = null;

   /*
    * The current bucket capacity. This is the maximum number of objects
    * allowed in a leaf quadtree node.
    */
   this.bucketCapacity = (bucketCapacity > 0) ? bucketCapacity : 40;

   /*
    * The array of object references stored in this quadtree.
    */
   this.objects = [];

   if ( objects )
      this.build( objects );
}

BRQuadTree.prototype = new Object;

#endif   // __PJSR_BRQuadTree_jsh

// ----------------------------------------------------------------------------
// EOF pjsr/BRQuadTree.jsh - Released 2020-12-12T20:55:24Z
