box
带边框和标题的标准区块。

演示文档
默认用法

<div class="ui-box">
    <div class="ui-box-head">
        <div class="ui-box-head-border">
            <h3 class="ui-box-head-title">区块标题</h3>
            <span class="ui-box-head-text">其他文字</span>
            <a href="#" class="ui-box-head-more">更多</a>
        </div>
    </div>
    <div class="ui-box-container">
        <div class="ui-box-content">ui-box-content 有默认内边距</div>
    </div>
</div>


浅色系区块

<div class="ui-box ui-box-light">
    <div class="ui-box-head">
        <div class="ui-box-head-border">
            <h3 class="ui-box-head-title">浅色系</h3>
            <span class="ui-box-head-text">其他文字</span>
            <a href="#" class="ui-box-head-more">更多</a>
        </div>
    </div>
    <div class="ui-box-container">
        <div class="ui-box-content">ui-box-content 有默认内边距</div>
    </div>
</div>


内容区域隐藏

<div class="ui-box">
    <div class="ui-box-head">
        <div class="ui-box-head-border">
            <h3 class="ui-box-head-title">没有内容</h3>
            <span class="ui-box-head-text">其他文字</span>
            <a href="#" class="ui-box-head-more">更多</a>
        </div>
    </div>
    <div class="ui-box-container" style="display: none;">
        <div class="ui-box-content">ui-box-content 有默认内边距</div>
    </div>
</div>


两个区块相连

<div class="ui-box">
    <div class="ui-box-head">
        <div class="ui-box-head-border">
            <h3 class="ui-box-head-title">区块标题</h3>
            <span class="ui-box-head-text">其他文字</span>
            <a href="#" class="ui-box-head-more">更多</a>
        </div>
    </div>
    <div class="ui-box-container">
        <div class="ui-box-content">ui-box-content 有默认内边距</div>
    </div>
</div>
<div class="ui-box ui-box-follow">
    <div class="ui-box-head">
        <div class="ui-box-head-border">
            <h3 class="ui-box-head-title">连着上面的box</h3>
            <span class="ui-box-head-text">其他文字</span>
            <a href="#" class="ui-box-head-more">更多</a>
        </div>
    </div>
    <div class="ui-box-container">
        <div class="ui-box-content">ui-box-content 有默认内边距</div>
    </div>
</div>