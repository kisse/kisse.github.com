paging
通用的分页组件，带有上下页和到达按钮。

演示


完整示例

<div class="ui-paging">
    <a href="#" class="ui-paging-prev">
        <i class="iconfont" title="左三角形">&#x00DC;</i> 上一页
    </a>
    <a href="#" class="ui-paging-item">1</a>
    <a href="#" class="ui-paging-item ui-paging-current">2</a>
    <a href="#" class="ui-paging-item">3</a>
    <a href="#" class="ui-paging-item">4</a>
    <a href="#" class="ui-paging-item">5</a>
    <a href="#" class="ui-paging-item">6</a>
    <a href="#" class="ui-paging-item">7</a>
    <span class="ui-paging-ellipsis">...</span>
    <a href="#" class="ui-paging-item">24</a>
    <a href="#" class="ui-paging-next">
        下一页 <i class="iconfont" title="右三角形">&#x00D6;</i>
    </a>
    <span class="ui-paging-info"><span class="ui-paging-bold">5/7</span>页</span>
    <span class="ui-paging-which"><input name="some_name" value="6" type="text"></span>
    <a class="ui-paging-info ui-paging-goto" href="#">跳转</a>
</div>


上下页（首页）

<div class="ui-paging">
    <span class="ui-paging-info">第<span class="ui-paging-bold">1/7</span>页</span>
    <span class="ui-paging-prev">
        <i class="iconfont" title="左三角形">&#x00DC;</i> 上一页
    </span>
    <a href="#" class="ui-paging-next">
        下一页 <i class="iconfont" title="右三角形">&#x00D6;</i>
    </a>
</div>


上下页（中间）

<div class="ui-paging">
    <span class="ui-paging-info">第<span class="ui-paging-bold">5/7</span>页</span>
    <a href="#" class="ui-paging-prev">
        <i class="iconfont" title="左三角形">&#x00DC;</i> 上一页
    </a>
    <a href="#" class="ui-paging-next">
        下一页 <i class="iconfont" title="右三角形">&#x00D6;</i>
    </a>
</div>


上下页（末页）

<div class="ui-paging">
    <span class="ui-paging-info">第<span class="ui-paging-bold">7/7</span>页</span>
    <a href="#" class="ui-paging-prev">
        <i class="iconfont" title="左三角形">&#x00DC;</i> 上一页
    </a>
    <span class="ui-paging-next">
        下一页 <i class="iconfont" title="右三角形">&#x00D6;</i>
    </span>
</div>