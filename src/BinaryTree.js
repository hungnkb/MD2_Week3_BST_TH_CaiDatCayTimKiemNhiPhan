"use strict";
exports.__esModule = true;
exports.BinaryTree = void 0;
var TreeNode_1 = require("./TreeNode");
var BinaryTree = /** @class */ (function () {
    function BinaryTree() {
        this.root = null;
        this.totalNode = 0;
    }
    BinaryTree.prototype.getSize = function () {
        return this.totalNode;
    };
    BinaryTree.prototype.inorder = function (node) {
        if (node) {
            console.log(node.data);
            if (node.left) {
                this.inorder(node.left);
            }
            if (node.right) {
                this.inorder(node.right);
            }
        }
    };
    BinaryTree.prototype.insert = function (e) {
        if (!this.root) {
            this.root = new TreeNode_1.TreeNode(e);
            this.totalNode++;
            return this.root;
        }
        else {
            var node = new TreeNode_1.TreeNode(e);
            var currentNode = this.root;
            while (currentNode) {
                if (e < currentNode.data) {
                    if (!currentNode.left) {
                        currentNode.left = node;
                        break;
                    }
                    currentNode = currentNode.left;
                }
                else if (e > currentNode.data) {
                    if (!currentNode.right) {
                        currentNode.right = node;
                        break;
                    }
                    currentNode = currentNode.right;
                }
            }
            this.totalNode++;
            return currentNode;
        }
    };
    return BinaryTree;
}());
exports.BinaryTree = BinaryTree;
