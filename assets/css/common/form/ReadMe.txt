form
ͨ�ñ���ʽ��

��ʾ


��ʾ�������� ui-button �� ui-tiptext ��

<form class="ui-form" name="" method="post" action="#" id="">
    <fieldset>
        <legend>������</legend>

        <div class="ui-form-item ui-form-item-error">
            <label for="" class="ui-label">�����ı�</label>
            <p class="ui-form-text">һ������������
        </div>

        <div class="ui-form-item">
            <label for="" class="ui-label">
                <span class="ui-form-required">*</span>�����ı�
            </label>
            <input class="ui-input" type="text"> <span class="ui-form-other"><a href="#">��ӱ�ע</a></span>
            <p class="ui-form-explain">Ĭ���İ���</p>
        </div>

        <div class="ui-form-item ui-form-item-error">
            <label for="" class="ui-label">�����ı�</label>
            <input class="ui-input" type="text"> <span class="ui-form-other"><a href="#">��������</a></span>
            <p class="ui-form-explain ui-tiptext ui-tiptext-error">
                <i class="ui-tiptext-icon iconfont" title="����">&#x006B;</i>����DOM�ϱ�������ֵ����ʹ��data-xxx����ʽ��
            </p>
        </div>

        <div class="ui-form-item ui-form-item-error ui-form-item-focus">
            <label for="" class="ui-label">�����ı�</label>
            <input class="ui-input" type="text"> <span class="ui-form-other"><a href="#">��������</a></span>
            <p class="ui-form-explain ui-tiptext ui-tiptext-error">
                <i class="ui-tiptext-icon iconfont" title="����">&#x006B;</i>ui-form-item-focus ��Ч����
            </p>
        </div>

        <div class="ui-form-item ui-form-item-success">
            <label for="" class="ui-label">�����ı�</label>
            <textarea class="ui-textarea">һ�����������߰˾�ʮ</textarea>
            <p class="ui-form-explain ui-tiptext ui-tiptext-success">
                <i class="ui-tiptext-icon iconfont" title="����">&#x00EF;</i>�ɹ��İ���
            </p>
        </div>

        <div class="ui-form-item">
            <label for="" class="ui-label">����ѡ��</label>
            <select id="province" name="province">
                <option value="">
                ��ѡ��
                </option>
                <option value="����">
                ����
                </option>
                <option value="�Ϻ�">
                �Ϻ�
                </option>
                <option value="���">
                ���
                </option>
                <option value="�㽭">
                �㽭
                </option>
            </select>
            <p class="ui-form-explain">�������������ͨ�������ڴ���</p>
        </div>

        <div class="ui-form-item">
            <label for="" class="ui-label ui-label-reset">������input</label>
            <input class="ui-input ui-input-disable" type="text" disabled>       
            <p class="ui-form-explain">Ŀǰ������</p>
        </div>

        <div class="ui-form-item">
            <label for="" class="ui-label">��֤��</label>
            <input class="ui-input ui-input-checkcode" type="text" data-explain="��������ͼ���ַ��������ִ�Сд��" maxlength="4" autocomplete="off" value="" name="fourcode">
            <img class="ui-checkcode-imgcode-img" align="absMiddle" alt="������������������" src="https://omeo.alipay.com/service/checkcode?sessionID=82012ab6b1f4ed9e675fb9092a25cb3b&r=0.9321065918075809"  title="���ˢ��ͼƬУ����">
            <a href="#">�����壬��һ��</a>
            <div class="ui-form-explain">��������ͼ���ַ��������ִ�Сд��</div>
        </div>

        <div class="ui-form-item">
            <input id="test" value="" type="checkbox"> <label for="test">�����Ķ������������ɷѷ���Э��</label>
        </div>

        <div class="ui-form-item">
            <input type="submit" class="ui-button ui-button-morange" value="ȷ��">
            <input type="button" class="ui-button ui-button-mwhite" value="ȡ��">
        </div>  
   </fieldset>
</form>


input �� textarea �� :focus ��:hover Ч���� IE6 ����Ч�� ��ʹ�� ui-input-focus �� ui-input-hover �����޸���