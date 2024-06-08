PGDMP     1    2                |            candy store    15.6    15.6 ?    F           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            G           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            H           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            I           1262    16595    candy store    DATABASE     �   CREATE DATABASE "candy store" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Russian_Russia.1251';
    DROP DATABASE "candy store";
                postgres    false            �            1259    25216    basket_products    TABLE       CREATE TABLE public.basket_products (
    id integer NOT NULL,
    quantity integer NOT NULL,
    price integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "productId" integer,
    "userId" integer
);
 #   DROP TABLE public.basket_products;
       public         heap    postgres    false            �            1259    25215    basket_products_id_seq    SEQUENCE     �   CREATE SEQUENCE public.basket_products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.basket_products_id_seq;
       public          postgres    false    225            J           0    0    basket_products_id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.basket_products_id_seq OWNED BY public.basket_products.id;
          public          postgres    false    224            �            1259    17059 
   categories    TABLE     �   CREATE TABLE public.categories (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.categories;
       public         heap    postgres    false            �            1259    17058    categories_id_seq    SEQUENCE     �   CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.categories_id_seq;
       public          postgres    false    217            K           0    0    categories_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;
          public          postgres    false    216            �            1259    25086    flavours    TABLE     �   CREATE TABLE public.flavours (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.flavours;
       public         heap    postgres    false            �            1259    25085    flavours_id_seq    SEQUENCE     �   CREATE SEQUENCE public.flavours_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.flavours_id_seq;
       public          postgres    false    221            L           0    0    flavours_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.flavours_id_seq OWNED BY public.flavours.id;
          public          postgres    false    220            �            1259    25257    orders    TABLE       CREATE TABLE public.orders (
    id integer NOT NULL,
    products character varying(255) NOT NULL,
    "totalPrice" integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "userId" integer
);
    DROP TABLE public.orders;
       public         heap    postgres    false            �            1259    25256    orders_id_seq    SEQUENCE     �   CREATE SEQUENCE public.orders_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.orders_id_seq;
       public          postgres    false    227            M           0    0    orders_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.orders_id_seq OWNED BY public.orders.id;
          public          postgres    false    226            �            1259    16742 
   prod_infos    TABLE       CREATE TABLE public.prod_infos (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    description character varying NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "productId" integer
);
    DROP TABLE public.prod_infos;
       public         heap    postgres    false            �            1259    16741    prod_infos_id_seq    SEQUENCE     �   CREATE SEQUENCE public.prod_infos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.prod_infos_id_seq;
       public          postgres    false    215            N           0    0    prod_infos_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.prod_infos_id_seq OWNED BY public.prod_infos.id;
          public          postgres    false    214            �            1259    25095    products    TABLE     B  CREATE TABLE public.products (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    price integer NOT NULL,
    img character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "flavourId" integer,
    "categoryId" integer
);
    DROP TABLE public.products;
       public         heap    postgres    false            �            1259    25094    products_id_seq    SEQUENCE     �   CREATE SEQUENCE public.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.products_id_seq;
       public          postgres    false    223            O           0    0    products_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;
          public          postgres    false    222            �            1259    17084    users    TABLE     '  CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying(255),
    password character varying(255),
    role character varying(255) DEFAULT 'USER'::character varying,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    17083    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    219            P           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    218            �           2604    25219    basket_products id    DEFAULT     x   ALTER TABLE ONLY public.basket_products ALTER COLUMN id SET DEFAULT nextval('public.basket_products_id_seq'::regclass);
 A   ALTER TABLE public.basket_products ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    225    224    225            �           2604    17062    categories id    DEFAULT     n   ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);
 <   ALTER TABLE public.categories ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    216    217            �           2604    25089    flavours id    DEFAULT     j   ALTER TABLE ONLY public.flavours ALTER COLUMN id SET DEFAULT nextval('public.flavours_id_seq'::regclass);
 :   ALTER TABLE public.flavours ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    221    220    221            �           2604    25260 	   orders id    DEFAULT     f   ALTER TABLE ONLY public.orders ALTER COLUMN id SET DEFAULT nextval('public.orders_id_seq'::regclass);
 8   ALTER TABLE public.orders ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    226    227    227            �           2604    16745    prod_infos id    DEFAULT     n   ALTER TABLE ONLY public.prod_infos ALTER COLUMN id SET DEFAULT nextval('public.prod_infos_id_seq'::regclass);
 <   ALTER TABLE public.prod_infos ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    214    215            �           2604    25098    products id    DEFAULT     j   ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);
 :   ALTER TABLE public.products ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    223    222    223            �           2604    17087    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    219    219            A          0    25216    basket_products 
   TABLE DATA           o   COPY public.basket_products (id, quantity, price, "createdAt", "updatedAt", "productId", "userId") FROM stdin;
    public          postgres    false    225   J       9          0    17059 
   categories 
   TABLE DATA           H   COPY public.categories (id, name, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    217   }J       =          0    25086    flavours 
   TABLE DATA           F   COPY public.flavours (id, name, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    221   K       C          0    25257    orders 
   TABLE DATA           `   COPY public.orders (id, products, "totalPrice", "createdAt", "updatedAt", "userId") FROM stdin;
    public          postgres    false    227   �K       7          0    16742 
   prod_infos 
   TABLE DATA           c   COPY public.prod_infos (id, title, description, "createdAt", "updatedAt", "productId") FROM stdin;
    public          postgres    false    215   �L       ?          0    25095    products 
   TABLE DATA           m   COPY public.products (id, name, price, img, "createdAt", "updatedAt", "flavourId", "categoryId") FROM stdin;
    public          postgres    false    223   LU       ;          0    17084    users 
   TABLE DATA           T   COPY public.users (id, email, password, role, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    219   �W       Q           0    0    basket_products_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.basket_products_id_seq', 43, true);
          public          postgres    false    224            R           0    0    categories_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.categories_id_seq', 7, true);
          public          postgres    false    216            S           0    0    flavours_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.flavours_id_seq', 4, true);
          public          postgres    false    220            T           0    0    orders_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.orders_id_seq', 10, true);
          public          postgres    false    226            U           0    0    prod_infos_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.prod_infos_id_seq', 12, true);
          public          postgres    false    214            V           0    0    products_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.products_id_seq', 20, true);
          public          postgres    false    222            W           0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 15, true);
          public          postgres    false    218            �           2606    25221 $   basket_products basket_products_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.basket_products
    ADD CONSTRAINT basket_products_pkey PRIMARY KEY (id);
 N   ALTER TABLE ONLY public.basket_products DROP CONSTRAINT basket_products_pkey;
       public            postgres    false    225            �           2606    17066    categories categories_name_key 
   CONSTRAINT     Y   ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_name_key UNIQUE (name);
 H   ALTER TABLE ONLY public.categories DROP CONSTRAINT categories_name_key;
       public            postgres    false    217            �           2606    17064    categories categories_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.categories DROP CONSTRAINT categories_pkey;
       public            postgres    false    217            �           2606    25093    flavours flavours_name_key 
   CONSTRAINT     U   ALTER TABLE ONLY public.flavours
    ADD CONSTRAINT flavours_name_key UNIQUE (name);
 D   ALTER TABLE ONLY public.flavours DROP CONSTRAINT flavours_name_key;
       public            postgres    false    221            �           2606    25091    flavours flavours_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.flavours
    ADD CONSTRAINT flavours_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.flavours DROP CONSTRAINT flavours_pkey;
       public            postgres    false    221            �           2606    25262    orders orders_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_pkey;
       public            postgres    false    227            �           2606    16749    prod_infos prod_infos_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.prod_infos
    ADD CONSTRAINT prod_infos_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.prod_infos DROP CONSTRAINT prod_infos_pkey;
       public            postgres    false    215            �           2606    25104    products products_name_key 
   CONSTRAINT     U   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_name_key UNIQUE (name);
 D   ALTER TABLE ONLY public.products DROP CONSTRAINT products_name_key;
       public            postgres    false    223            �           2606    25102    products products_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.products DROP CONSTRAINT products_pkey;
       public            postgres    false    223            �           2606    17094    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public            postgres    false    219            �           2606    17096    users users_password_key 
   CONSTRAINT     W   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_password_key UNIQUE (password);
 B   ALTER TABLE ONLY public.users DROP CONSTRAINT users_password_key;
       public            postgres    false    219            �           2606    17092    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    219            �           2606    25222 .   basket_products basket_products_productId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.basket_products
    ADD CONSTRAINT "basket_products_productId_fkey" FOREIGN KEY ("productId") REFERENCES public.products(id) ON UPDATE CASCADE ON DELETE SET NULL;
 Z   ALTER TABLE ONLY public.basket_products DROP CONSTRAINT "basket_products_productId_fkey";
       public          postgres    false    223    3230    225            �           2606    25227 +   basket_products basket_products_userId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.basket_products
    ADD CONSTRAINT "basket_products_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE SET NULL;
 W   ALTER TABLE ONLY public.basket_products DROP CONSTRAINT "basket_products_userId_fkey";
       public          postgres    false    3222    219    225            �           2606    25263    orders orders_userId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT "orders_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE SET NULL;
 E   ALTER TABLE ONLY public.orders DROP CONSTRAINT "orders_userId_fkey";
       public          postgres    false    219    227    3222            �           2606    25110 !   products products_categoryId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.products
    ADD CONSTRAINT "products_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES public.categories(id) ON UPDATE CASCADE ON DELETE SET NULL;
 M   ALTER TABLE ONLY public.products DROP CONSTRAINT "products_categoryId_fkey";
       public          postgres    false    3216    217    223            �           2606    25105     products products_flavourId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.products
    ADD CONSTRAINT "products_flavourId_fkey" FOREIGN KEY ("flavourId") REFERENCES public.flavours(id) ON UPDATE CASCADE ON DELETE SET NULL;
 L   ALTER TABLE ONLY public.products DROP CONSTRAINT "products_flavourId_fkey";
       public          postgres    false    223    3226    221            A   Z   x�}�K
�0��ur
�ҐdҚ�,��>�X���10r���Q4�cq��V�OI2e8�	��O1��sL>T��5|�W���]�� �$�      9   �   x�}�;�0��9>Ev�(���g�0������T�=�s#���
����}�Z��R��<����h�����B)��ћNul�3m�z��&�\�_f/��K;�� ���̩p��V�F�:�K�ƽ۝7IbdG���&89 � -!O�      =   �   x�}�1
�@E�S�����$�Y������'��`�x���Z�I@�_���\�Ľ������r�Ru�]$6M�9�8���G���x�T�s㦑ua�"Jg<��З]ݷ-m��fn9�M�+Z"������j!*���Q��D3D�HD/3UD      C   �   x�}�=
�@���Sl�Y�'���{�XX� 9@���(Hb 9�̍�I�3���ܠ�:x�:����XB�Q�'���P��Q`�1���bF�S�3J(�X?сtq�P���-׊A�ԘC�g:w2<Q-&$WR��R�@$5^=0�nC������j�9l�t?�/�s�vR��tbi�גs�E4      7   �  x��Y�n�F}����kA�i�ַ�cd9�e8�
�EѢH���M��P��/�K:sfv��\9n�� ��\���̙�^�{�7�^3��ͬ�'�eRo�msU?�U]���z��3�9i>�.��z�\ѿ=+�z��.�i�W���˛9��Ҷ�XW�]sM�҃GZ,�'�G�tb��{�N��_hS�ܓL�VQx��ww�o��+��NNH�'�B��撶�D�'ZX�^:�`)��=)W҆����5߷%I�}�GKÄS��,9�� j�A7�.I���'!K5CeY��س+�w�DU6�n 1h�3/aY`�< ֯�O��2�H��$��L ;=�%�[��B�vq���\�.yY� kT�ֲ~q4 ��N%��$ra�g�J	[����@++��8�N&D�As�v/�D��V!^>�G���({��'�t�M��t�e��F'�=����?�w��,8�Y�DB҃k����xa	R��@�l�$V��
x���B�������B�^bssdX�{vcBG�d��ժ��F_��o��V���Ja�"a��s���{�Z���� l���&p�dM!o���/��\kN3,�\Ix�H�{��=;��"��J�M���՗���t����V}��ex��B�𧭰�}y�B�m�T"��$����V�D���%�a�<p�p��� Cr{ȩ�d.Z��%p�A�;����Od�l:Ά�I֍?��y��d:��DQƁ�A��ܐj�$Fo�Y�G�[lg%��Y��~��x{j�Z8�@��es�t����bA��acY�s�%Fc�=���@�^�
���s�нu����]Z�ʀ�%���%-8�E'���d�
✞pPzn���;�F1J�� J�)�Jv�aj����p�~v��z�ln�A!��氠!���+x��`��/C�g���4=�]�����B��{��_?�fCQ��ȅ,�5��2f��Jٻ�-RN<����Q}��_T ��q9%"� ��Ar��׌r7a��&�'Z,<�nS����!.x��_xi�V3 � ~����K:l�|&I�������	�$�e9psUe|s@�U,�d����)�Աis�js!�8�UI�Hڰ�2�ě#z�t����j��!+�c�X�^N��1��Q����c5U��Z8`��q�	΅ �~��$�f������ޣ4�Ol��RZ�W�u��[)��� �����]����_.���4�c��ywJo6"}�0]��������h;��m�]u���It�; ��h��%�F%/xfp������Ru��ۮ�&�;	1��ـts8�xW3x��<�����m�|�SO�r6�p
����T��[)~Zdkz͞��[�ߌ#�/##��*� ��X�0�2��O�
� &O��g��n�z��q�܆���u��*֯gַ�L��B��u{K�&��B�R
4���l��ޝ!v$����:Q������v���48�s�v��Qv�~86����xz��@�H��ъ���s���8]��t唗��#��������;�����cVr�/L�-�0�Y0�	B"@aP���� �/�Xo��s��+�v�3�4΍��8�3�G�I�":�k��E�����\rpH~{�2h8�?�̶7�fȷ� �O3�hI%�����H� �c:	� ���|# ��Ab�d�##@'���9�����n~��D����R~R��T\K?���%e����`̅B���N� ��x�DE.@0���W≕�$��Ng�yXF�Nf���=O'g2p�Y?�\��"s�ۯ�db>>��
���b�Fs�d'+�6����o,Nwx�̻Vܯ��3�)x6��O���FYdN/���].��]�����[�+D�mȐV#�t8T���`�l'*�K���n�����M�OWI�"R�.�/��--Gl9�l	�%;����P�o�<Β�h���4f��ȣ�����ԝ�Ə�Rq�l�y\%��A��;���<%�����
w�L'�OC"D��Q�@��I� ݻw.�U�ݺu�Ql:Uّ�b;,��H�������<�u�k3tͯ¹7����%7}�o�eÑ�hʶ�s����K囤ޠ�?Ö�ėB��pb|<M/������G�Y?��{��b�K�?�K.�c=�c8U�R�6<�8n�����~�_���u      ?   ;  x�}�͊�@�ם��{�P]U��|7�� �"� � �p�R]����1>C�7�r�{op:9���������v�=k�ۏ�n�~�����>�h|f�C��#'�=��b-U�4K����!$�a�vDIz����$klM��~�����l�����B9ۭ��;��I��Ճ�� ˬ0��&�5'\�?���cOR�΢�Ѯ۽R, W�v�A1�!���s�P��JD��K�0%�1X7��{g���d��ִ�ją2���Wç�u�ݨ�z�T49�#X���dS ׂ�� �B�2�ws9��pgɴ�J����.ۯ�YЖ���~H�!��A'Vu�y�ZS0$��g��8Z��Q.���˦}��o�D�h��t~.T�������9Nu��%R[f��y�:�4��9^�Y���+8O%1��b��N�擓7;|T��T�P-K�
H�.���ȸ�OhX�T�90�7���,���4�T&�5"H`��%���!U���B�A����r+��ӭ���,7��Zs�2�hA@/L�yF�x�k4���V8�$��E�u���y�      ;   F  x�}�M��H����^�n2�)�@X]PQP�P���C@���6�I+�I�wQU��Υ
�k�xaLo����O�|.�8�L�/�k�dǕ���oL�\F����6M��a��XC����f�|0���y������6�\�a��Yga�1����D�0�y0�'�ʈ�ݱ��=�>�� ��_�؎�M´-Y52N!���휫 յ+\�S��_��A��?L��q�ߖ��;�;�@WgO끈9��e�+�9Q�s*2����Fp�S:dCu����nt��='R+'E{�8�������q��� ?oJ+Q���mSN7�ݗ�쎑_�դ���j8 �Q�s���F���s	��[l�� A$@C��g����Ȫ3M]�j��u�:�q~�'YJ,`����u�s�� �p����u>��XY�fXhS~&
����-�ho����պ{0�	�3h�2��o���w�tC��_��%v2*��,"L��}c��(���`���f᪯�ŭ���r2��/���+����8�vV*��Iӆnc�����Y�`^������\�r!�4b�e��9�i�Ҋd��J�kC5w�\8R}MK=�����?��}�s�?�S+Q�>��o[�B[��Ѣ%�6
*��z5w�(]�$[J��7y���R�*��δ���߅�@H�=�{��$
p����ҤYu�E4����9�`'7���rO���(�ϛ˥7�d�_����V�����X1�{C?ߦ�@y�u�͈n�:Ef:uu8�F��v�i}��v�� .ⶂ'$_O� 7�j�<3�=���M�緝�h��~柽�     